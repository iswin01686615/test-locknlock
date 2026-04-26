import { NextResponse } from "next/server";
import * as repo from "@/lib/repositories/product.repo";

export async function GET(_: any, { params }: any) {
  const data = await repo.getProductById(params.id);
  return NextResponse.json(data);
}

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();
  await repo.updateProduct(params.id, body);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(_: any, { params }: any) {
  await repo.deleteProduct(params.id);
  return NextResponse.json({ message: "Deleted" });
}
