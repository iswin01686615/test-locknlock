import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    // eslint-disable-next-line no-var
    var _mongo: Promise<MongoClient> | undefined;
}

if (!global._mongo) {
    client = new MongoClient(uri);
    global._mongo = client.connect();
}

clientPromise = global._mongo;

export default clientPromise;