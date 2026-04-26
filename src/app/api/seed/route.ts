// @ts-ignore
import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db();

    await db.collection("products").insertMany([
        {
            name: "Bình giữ nhiệt LocknLock",
            price: 250000,
            createdAt: new Date(),
        },
        {
            name: "Hộp cơm LocknLock",
            price: 150000,
            createdAt: new Date(),
        },
        {
            name: "Nồi chiên không dầu",
            price: 1200000,
            createdAt: new Date(),
        },
    ]);

    return Response.json({ message: "Seed thành công" });
}