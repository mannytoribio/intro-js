import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

const createClient = async () => {
  const client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  const db = client.db('mannysFirstDatabase')
  const col = db.collection('users')
  console.log(col)
  return col
};

createClient().then()
