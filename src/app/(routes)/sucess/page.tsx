"use client";
import Head from "./head";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createCookies} from "@/utils/token"
import Loading from "@/components/Loading";

const Sucess = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("order_id");
  const [ message ,setMessage] = useState('')
  const [ status , setStatus] = useState(false)
   const [ loading , setLoading] = useState(true)

  useEffect(() => {
    //Funçao que recebe a order do gatway 
    async function order() {
     const token = await createCookies("token", )
      const request = await fetch("/api/pdf", {
        method: "POST",
        body: JSON.stringify({ id,token }),
      });
       const response = await request.json()
       
       if(response.message){
        
         setMessage(response.message)
         setLoading(false)
       }
      return
    }
    if (id) {
      
        order();
  
        
        
      
    }
  }, []);
  
  return (
    <>
    <Head/>
    <section className="flex flex-col w-full h-screen  items-center justify-center ">
      {
        loading ?
        <Loading/>
        :
         <p className="text-center text-xl text-gray-500">{message}</p>
      }
   
      
      
    </section>
    </>
  );
};

export default Sucess;
