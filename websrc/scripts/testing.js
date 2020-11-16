const dblink = "postgres://hzlqzglq:TA5Tns4Mp2Kme-EUT9qf36NHyMkHsNpl@salt.db.elephantsql.com:5432/hzlqzglq"

let dbase = []

fetch(dblink)
    .then(blob => blob.json())
    .then(data => dbase.push(...data))

console.log(dbase)