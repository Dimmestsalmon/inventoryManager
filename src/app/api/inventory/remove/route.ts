import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const sql = neon(process.env.DATABASE_URL!);
    await sql("DELETE FROM inventory WHERE id = $1", [id]);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to remove item" }, { status: 500 });
  }
}