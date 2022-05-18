const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const dbUrl = "mongodb://localhost:27017"
const dbname = "s8g18"

MongoClient.connect(dbUrl, {}, (err, client)=>{
    if(err) return console.log(err)
    const db = client.db(dbname)
    db.collection("user").insertOne({name:"marwa"})
})