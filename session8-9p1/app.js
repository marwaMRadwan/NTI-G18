// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://marwaradwan:ihGkyqyfupSinhUB@cluster0.zpmzj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     if(err) return console.log(err.message)
//     const db =client.db("test");
//   db.collection("devices").insertOne({name:"a"}).then(()=>{client.close()})
//   // perform actions on the collection object
  
// });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://TEST:388YgJRSfUAZL6zV@cluster0.lwbj6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if(err) return console.log(err.message)
  const collection = client.db("test").collection("devices");
  collection.insertOne({name:"a"}).then(()=>{client.close()})
  // perform actions on the collection object
});
