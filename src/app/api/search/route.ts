import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function GET(req: Request, res: Response) {
    const {searchParams}= new URL(req.url);
     const search = searchParams.get('search')
     try {
        if(search){
            const searchProducts = await prisma.products.findMany({
                where:{
                   title:{
                    contains:search as string
                   }
                }
             })
             return NextResponse.json({searchProducts})
        }
        else{
            const searchProducts = await prisma.products.findMany({
                include:{
                    Categories:true
                }
            })
            return NextResponse.json({searchProducts})
             
        }
       
       
     } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Erro ao buscar produto."},{status:500})
     }
     finally{
         await prisma.$disconnect()
     }
   
}