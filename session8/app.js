const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marwaradwan:ihGkyqyfupSinhUB@cluster0.zpmzj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if(err) return console.log(err.message)
    const db =client.db("test");
  db.collection("devices").insertOne({name:"a"}).then(()=>{client.close()})
  // perform actions on the collection object
  
});