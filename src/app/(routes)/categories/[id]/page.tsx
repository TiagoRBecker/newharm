"use client";
import Head from "./head";
import { notFound, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { use, useContext, useEffect, useState } from "react";
import { CartContext } from "@/Context";
import Loading from "@/components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNav from "@/components/BottomNav";
import { api } from "@/utils/api";

const Id = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const id = params.id;
  const router = useRouter();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState<any>(); // state que recebe os produtos
  const [loading, setLoading] = useState(false); //state de loading
  const [error , setError]= useState(false)
  const [message , setMessage] = useState()
  useEffect(() => {
    if (id) {
      getDados();

      return;
    }
  }, []);

  //Funçao para receber o produto da categoria selecionado
  async function getDados() {
    const get = await api.getDocs(id);
      if(get?.message){
       setError(true)
       setMessage(get.message)
       setLoading(true);
       return

      }else{
        setProducts(get.product);
        setLoading(true);
      }
 
    
  

   
    
  }
  // Adicona e vai para carrinho de compraas
  const addGoToCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin?product=${id}`);
      return;
    } else {
      addToCart(items);
      router.push("/cart");
    }
  };
  const addCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin?product=${id}`);
      return;
    } else {
      addToCart(items);
    }
  };
  const stars = (title:string)=>{
    switch(title){
      case "PACOTE PARA DENTISTAS INICIANTES":
       return (<span className="text-[#54595F] ml-3">79 Avaliações</span>)
       break
       case "PACOTE PARA DENTISTAS AVANÇADO": 
       return (<span className="text-[#54595F] ml-3">155 Avaliações</span>)
       break
       case "PACOTE PARA BIOMÉDICO INICIANTE":
       return (<span className="text-[#54595F] ml-3">95 Avaliações</span>)
       break
       case "PACOTE PARA BIOMÉDICO AVANÇADO":
       return (<span className="text-[#54595F] ml-3">93 Avaliações</span>)
       break
       case "PACOTE PARA PROFISSIONAL DE HARMONIZAÇÃO INICIANTE":
       return (<span className="text-[#54595F] ml-3">147 Avaliações</span>)
       break
       case "PACOTE PARA PROFISSIONAL DE HARMONIZAÇÃO AVANÇADO":
       return (<span className="text-[#54595F] ml-3">107 Avaliações</span>)
       break
    }
   }
   if(id > "6"){
    return(
       notFound()
    )
   }
  
  return (
    <>
      <Head />
      <section className="w-full h-full py-[5rem] bg-white">
      {
        loading ?
        <div className="w-full h-full px-5  mx-auto">
        <div className="flex-col md:w-full md:flex-row h-full  flex gap-3">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <video muted autoPlay loop playsInline >
            <source src={products?.thumb} type="video/mp4" className="rounded-md" />
            
          </video>
           
          
          </div>

          <div className="lg:w-1/2 w-full h-full  px-2 py-2">
            <h1 className="w-full text-2xl font-bold  text-left   ">
              <span className="text-color"> {products?.title}</span>
            </h1>
            <h2 className="text-sm title-font text-[#54595F] tracking-widest"></h2>

            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                {stars(products?.title)}
              </span>
            </div>
            <div>
              <p className="leading-relaxed text-[#54595F] text-justify">
                {products?.slug}
              </p>
            </div>
            <div className="flex flex-col  w-full h-full py-5 ">
              <p className="font-bold text-lg  text-black flex gap-2 ">
                Valor total:
                <span className="text-color font-bold ">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(products?.price / 100)}
                </span>
              </p>
            </div>
            <div className="flex  mt-6 gap-5">
              <button
                onClick={() => addGoToCart(products)}
                className="btn "
              >
                Comprar
              </button>
              <button onClick={() => addCart(products)} className="btn ">
                Adicionar
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-6 py-5">
          <div className="flex  items-start ">
            <span className=" text-[#54595F] font-bold  text-xl">
              Documentaçao inclusa no {products?.title}
            </span>
            <div className="relative"></div>
          </div>
        </div>
        <div className="grid grid-col-1 gap-4 ">
          {products?.desccript?.map((details: any, index: number) => (
            <div
              key={index}
              className="w-[100%] h-full border-[1px] border-[#ccc] py-5 px-5 rounded-md bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <h1 className=" font-bold text-color py-3 uppercase">{details.name}</h1>
              <ul className="text-base text-[#072137]  ">
                {details.list.split(".").map((list: any, index: number) => (
                  <li key={index} className=" flex pb-3">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      :
      <Loading/>
      }
         
        

        <ToastContainer />
      </section>
      <BottomNav />
    </>
  );
};

export default Id;
