import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug
    
  return NextResponse.json({ })
  }