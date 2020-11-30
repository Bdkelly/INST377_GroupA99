import express from "express";
import sqlite3 from "sqlite3";
//
const dbSettings = {
  filename:'./tmp/database.db',
  driver: sqlite3.Database,
}
//
async function foodDataFetcher(URL) {
    const data = await fetch(URL);
    const json = data.json()
    return json
}
//
async function maindbs(entry,db){
    try{
      const New_name = entry.id;
      const New_category = entry.title;
      await db.exec(`INSERT INTO FoodDB (store_name, store_category) VALUES ("${New_name}","${New_category}")`);
      //console.log(`${store_name} and ${category} inserted`);
    } catch(e) {
          console.log('Error on insertion');
          console.log(e);
          }
  }
//
  async function dbBus(dbSettings){
    const busURL = 'https://api.umd.io/v1/bus/routes'
    try{
      const db = await open(dbSettings);
      await db.get("PRAGMA foreign_keys = ON")
      await db.exec(`
        CREATE TABLE IF NOT EXISTS BusID(
        id_bus INTEGER PRIMARY KEY AUTOINCREMENT,
        route_id TEXT,
        title TEXT)
        `);
      const data = await DataFetcher(busURL);
      data.forEach((entry) => { maindbs(entry, db); });
      console.log('Bus Table connected.');
    } catch (e) {
      console.log('Error loading Database.');
      console.log(e);
  }
}
async function dbStops(dbSettings){
    const busURL = 'https://api.umd.io/v1/bus/stops'
    try{
      const db = await open(dbSettings);
      await db.get("PRAGMA foreign_keys = ON")
      await db.exec(`
        CREATE TABLE IF NOT EXISTS StopID(
        id_bus INTEGER PRIMARY KEY AUTOINCREMENT,
        stop_id TEXT,
        title TEXT)
        `);
      const data = await DataFetcher(busURL);
      data.forEach((entry) => { maindbs(entry, db); });
      console.log('Bus Table connected.');
    } catch (e) {
      console.log('Error loading Database.');
      console.log(e);
  }
}
async function fulldb(dbSettings){
    dbStops(dbSettings)
    dbBus(dbSettings)
}
