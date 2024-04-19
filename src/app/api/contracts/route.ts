import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function GET(req: Request) {
  const products = await prisma.products.findMany({
    orderBy:{
      updateAt:"asc"
    },
    select:{
      id:true,
      title:true,
      price:true,
      img:true,
    
    }
    
    
  });
  return NextResponse.json({ products });
}
export async function POST(req: Request) {
   
  const products = await prisma.products.update({
   where:{
    id:33
   },
   data:{
    cod:"https://onedrive.live.com/download?resid=5F2CFC4512386085%21164&authkey=!AP2ta7r_egoSC0o"

    
   }
    
  });
  return NextResponse.json({ products });
}

