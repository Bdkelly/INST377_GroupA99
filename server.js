// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
//import dotenv from 'dotenv';
import { open } from 'sqlite';
import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';
//
//dotenv.config();
//
const app = express();
const port = process.env.PORT || 8080;
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('websrc'));
//
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

const dbSettings = {
  filename:'./tmp/database.db',
  driver: sqlite3.Database,
}
//
async function DataFetcher(URL) {
  const data = await fetch(URL);
  const json = data.json()
  return json
}
//
async function maindbs(entry,db){
  try{
    const New_name = entry.route_id;
    const New_title = entry.title;
    await db.exec(`INSERT INTO BusID (route_id, title) VALUES ("${New_name}","${New_title}")`);
    //console.log(`${New_name} and ${New_title} inserted`);
  } catch(e) {
        console.log('Error on insertion');
        console.log(e);
        }
      }
//
async function query(db){
  console.log("Query Running")
  const result = await db.all(`SELECT *, FROM BusID GROUP BY id_bus`);
  console.log(result)
  return result;
}
//
async function dbBus(dbSettings){
  const busURL = 'https://api.umd.io/v1/bus/routes'
  try{
    const db = await open(dbSettings);
    console.log("Creating DB")
    await db.exec(`
      CREATE TABLE IF NOT EXISTS BusID(
      id_bus INTEGER PRIMARY KEY AUTOINCREMENT,
      route_id TEXT,
      title TEXT)
      `);
    const data = await DataFetcher(busURL);
    console.log("Data Fetching")
    data.forEach((entry) => { maindbs(entry, db); });
    console.log('Bus Table connected.');
  } catch (e) {
    console.log('Error loading Database.');
    console.log(e);
}
}
//dbBus(dbSettings);
//
// app.route('/sql')
//   .get((req, res) => {
//     console.log('GET request detected');
//   })
//   .post(async (req, res) => {
//     console.log('POST request detected');
//     const db  = await open(dbSettings);
//     console.log('Here1')
//     const results = await query(db);
//     console.log("Here2")
//     res.json(results)
//   });
//