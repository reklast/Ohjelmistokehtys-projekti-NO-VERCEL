const { MongoClient } = require('mongodb');

async function connect() {
  const uri = process.env.MONGODB_URI;
  const options = {};
  
  try {
    const client = new MongoClient(uri, options);
    const clientPromise = client.connect();
    return clientPromise;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error to be handled by the calling code
  }
}

module.exports = { connect };