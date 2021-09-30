import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()
let _client // underscore makes this private and indicates it should not be used

//the below will create 1 client, if it already exist it just returns it
const createClient = async () => {
  if(!_client) {
    _client = new MongoClient(process.env.MONGO_URL)
    await _client.connect()
    }
  return _client
};


const getUserCollection = async () => {
  const client = await createClient()
  const db = client.db('mannysFirstDatabase')
  return db.collection('user')
}


const createUser = async ({userName, dob, email}) => {
  const userCollection = await getUserCollection()
  await userCollection.insertOne({userName, dob, email})
  return {userName, dob, email}
}


const run = async () => {
  const client = await createClient()
  await createUser({
    userName: 'Manny',
    dob: new Date('09/22/1993'),
    email: 'test@gmail.com'
  }).then()
  await client.close()
}

run().then()
