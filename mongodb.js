// connet to MongoDB
const{MongoClient} = require('mongodb');
const uri = "mongodb+srv://Heippa:<Heippa1234>@cluster0.gret7eu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run(){
    try{
        await client.connect();
        await client.db("admin").command({ping:1});
        console.log("Connected to MongoDB");
    }
    finally{
        await client.close();
    }
    }
    run().catch(console.dir);

    
    