"use client";
import Link from "next/link";
import Head from "./head";
import { useContext, useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";
import Loading from "@/components/Loading";
import { Product } from "@/utils/types";
import { api } from "@/utils/api";
import { CartContext } from "@/Context";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";



const Contract = () => {
   
   
  const [products, setProducts] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session } = useSession();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    
    getProducts()
    
   
  }, [searchInput]);

  const handleSearchInput = (event:any) => {
    setSearchInput(event.target.value);
  };
  const search = (input:any) => {
    return products.filter((product:any) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
  };
  const getProducts = async () => {
    const products = await api.getProducts();
    setProducts(products.products);
    setLoading(false)
    return;
  };
  
  const addGoToCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin`);
      return;
    } else {
      addToCart(items);
      router.push("/cart");
    }
  };
  const addCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin`);
      return;
    } else {
      addToCart(items);
    }
  };
 

  return (
    <>
      <Head />
      <section className="w-full h-full bg-white py-[1.5rem] ">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="w-[80%] mx-auto flex pt-4 gap-2 items-center px-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full h-9 outline-none border-[1px] border-gray-300 pl-3 rounded-md"
                  placeholder="Buscar documentos "
                  value={searchInput}
                  onChange={handleSearchInput}
                />
              </div>
              <div className="w-[50px] btn py-1 rounded-md">
                <button
                  className="w-full  flex items-center justify-center"
                  onClick={()=>setProducts(search(searchInput))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-white w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-4 w-[80%]  py-10 grid-cols-1 mx-auto">
              {products?.map((items: any, index: number) => (
                <div
                  key={index}
                  className="w-full h-full flex flex-col items-center gap-3 py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md md:flex md:flex-row "
                >
                  <div className="w-[30%] h-full px-2 py-2 relative">
                    <img
                      src="https://res.cloudinary.com/tiagobecker/image/upload/v1694523533/WhatsApp_Image_2023-09-11_at_12.59.54_1_ccowxt.jpg"
                      alt={items.title}
                      className="w-full  h-full object-contain"
                    />
                  </div>
                  <div className="w-full p-2 md:w-[70%]   flex flex-col ">
                    <h1 className="w-full md:w-[78%] text-left text-base uppercase   text-[#54595F] font-bold  ">
                      {items.title}
                    </h1>
                    <div className="flex  w-full items-center justify-start">
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
                       
                      </span>
                    </div>
                    <div className="w-full flex  justify-start flex-col  py-4 ">
                      <p className="text-[#54595F] font-bold">
                        6x de{" "}
                        <span className="text-color font-bold text-lg">
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(items?.price / 600)}
                        </span>
                      </p>
                      <p className="text-black font-bold text-base">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(items?.price / 100)}
                      </p>
                    </div>
                    <div className="w-full flex items-center gap-2">
                      <Link href={"https://www.youtube.com/channel/UCzSf0QeSUTbE-jfcgEFGJag"} target="_blank" className="w-full flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>

                      <p className="text-base text-gray-400">Saiba mais</p>
                      </Link>
                    </div>

                    <div className="w-full flex items-center mt-4  justify-end   gap-2 ">
                      <button
                        onClick={() => {
                          addGoToCart(items);
                        }}
                        className=" text-[12px] btn w-[50%] md:text-base md:w-[230px]  btn py-3 px-2 text-white rounded-md"
                      >
                        Comprar Agora
                      </button>

                      
                        <button onClick={()=>addCart(items)} className="text-[12px] btn w-[50%]  md:text-base md:w-[230px] btn py-3 px-2 text-white rounded-md">Adicionar ao carrinho</button>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
            { products?.length <= 0 && <div className="w-full h-screen flex items-center justify-center">
            <p className="text-[#54595F] text-lg">Nenhum produto encontrado.</p>
              </div>}
          </>
        )}
      </section>

      <BottomNav />
    </>
  );
};

export default Contract;
