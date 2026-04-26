import clientPromise from "../mongodb";
import { ObjectId } from "mongodb";

export async function getAllProducts() {
  const client = await clientPromise;
  return client.db().collection("products").find().toArray();
}

export async function createProductRepo(data: any) {
  const client = await clientPromise;
  return client.db().collection("products").insertOne(data);
}

export async function getProductById(id: string) {
  const client = await clientPromise;
  return client.db().collection("products").findOne({
    _id: new ObjectId(id),
  });
}

export async function updateProduct(id: string, data: any) {
  const client = await clientPromise;
  return client.db().collection("products").updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
}

export async function deleteProduct(id: string) {
  const client = await clientPromise;
  return client.db().collection("products").deleteOne({
    _id: new ObjectId(id),
  });
}
