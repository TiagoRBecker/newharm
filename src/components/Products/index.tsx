import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { CartContext } from "@/Context";

const Products = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    getProducts();
  }, []);
  const [categories, setCategories] = useState([]);

  const stars = (title: string) => {
    switch (title) {
      case "PACOTE PARA DENTISTAS INICIANTES":
        return <span className="text-[#54595F] ml-3">79 Avaliações</span>;
        break;
      case "PACOTE PARA DENTISTAS AVANÇADO":
        return <span className="text-[#54595F] ml-3">155 Avaliações</span>;
        break;
      case "PACOTE PARA BIOMÉDICO INICIANTE":
        return <span className="text-[#54595F] ml-3">95 Avaliações</span>;
        break;
      case "PACOTE PARA BIOMÉDICO AVANÇADO":
        return <span className="text-[#54595F] ml-3">93 Avaliações</span>;
        break;
      case "PACOTE PARA PROFISSIONAL DE HARMONIZAÇÃO INICIANTE":
        return <span className="text-[#54595F] ml-3">147 Avaliações</span>;
        break;
      case "PACOTE PARA PROFISSIONAL DE HARMONIZAÇÃO AVANÇADO":
        return <span className="text-[#54595F] ml-3">107 Avaliações</span>;
        break;
    }
  };
  const getProducts = async () => {
    const categories = await api.getCat();
    setCategories(categories.categories);
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
    <section className="max-w-[1340px] mx-auto h-full">
      {categories.map(
        (
          categorie: {
            id: number;
            title: string;
            description: string;
            products: [];
            img:string
          },
          index
        ) => (
          <>
            <div className="flex gap-2">
              <div className="w-[20%] h-full px-2 py-2 relative">
                <img
                  src={categorie.img}
                  alt={categorie.title}
                  className="w-full  h-[230px] object-fill rounded-sm"
                />
              </div>
              <div className="w-[80%] flex flex-col">
                <h1 className="text-2xl w-full    text-left md:text-3xl font-bold md:w-[80%]  md:text-left  ">
                  <span className="text-color"> {categorie.title}</span>
                </h1>
                <p className="text-gray-400">{categorie.description}</p>
                <div className="w-full flex items-center gap-2 mt-2">
                  <Link
                    href={
                      "https://www.youtube.com/channel/UCzSf0QeSUTbE-jfcgEFGJag"
                    }
                    target="_blank"
                    className="w-full flex items-center gap-2"
                  >
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
              </div>
            </div>
            <div className="px-4 w-full py-10 grid-cols-1 mx-auto ">
              {categorie.products?.map((items: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col  md:my-5 w-full h-full md:flex  md:flex-row  items-center gap-3  border-[1px] border-gray-400 rounded-md  "
                >
                  <div className="w-full md:w-[70%] flex flex-col gap-1  px-2 py-2">
                    <h1 className="w-full  text-left text-sm    text-[#54595F] font-bold  ">
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
                        {stars(items.title)}
                      </span>
                    </div>
                    <div className="w-full flex  justify-start flex-col  py-1 ">
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
                  </div>
                  <div className="w-full my-4 justify-center md:w-[30%] flex items-center   md:justify-end   gap-2 px-2">
                    <button
                      onClick={() => {
                        addGoToCart(items);
                      }}
                      className=" btn w-[30%] md:text-base md:w-[120px]  btn py-2 px-1 text-white rounded-md"
                    >
                      Comprar
                    </button>

                    <button
                      onClick={() => addCart(items)}
                      className="text-[12px] btn w-[30%]  md:text-base md:w-[120px] btn py-2 px-1 text-white flex items-center justify-center rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 font-bold"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </section>
  );
};

export default Products;
