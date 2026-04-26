import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET(
    req: Request,
    context: { params: Promise<any> } // 👈 KHÔNG ép type
) {
    try {
        const params = await context.params;
        const id = params?.id;

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: "Invalid ID" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db();

        const product = await db.collection("products").findOne({
            _id: new ObjectId(id),
        });

        return NextResponse.json(product);
    } catch (err) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}