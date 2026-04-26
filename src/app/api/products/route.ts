import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        // ✅ validate id trước
        if (!params?.id || !ObjectId.isValid(params.id)) {
            return NextResponse.json(
                { error: "Invalid ID" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db();

        const product = await db.collection("products").findOne({
            _id: new ObjectId(params.id),
        });

        return NextResponse.json(product);
    } catch (err) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}