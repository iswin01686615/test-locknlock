import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const products = await db
            .collection("products")
            .find({})
            .toArray();

        // 🔥 đảm bảo luôn trả array
        return NextResponse.json(products || []);
    } catch (err) {
        console.error("API ERROR:", err);

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}