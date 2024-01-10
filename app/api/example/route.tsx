import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  // Example: Fetch data from the database

  try {
    const data = await prisma.example.findMany();

    return NextResponse.json(data);
  } catch (error) {
    console.log("[COLORS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
