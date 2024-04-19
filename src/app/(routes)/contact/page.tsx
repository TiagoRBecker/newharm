import  ContactC  from "@/components/contact/index"
import Head from "./head";
import BottomNav from "@/components/BottomNav";
import Whatsszapp from "@/components/WhatssappButtom/intex";
const Contact = () => {
    return ( 
        <section className="w-full h-full">
        <Head/>
        <ContactC color="bg-[#e8e8e8]"/>
        
        <BottomNav/>
         <Whatsszapp/>
        </section>
     );
}
 
export default Contact;