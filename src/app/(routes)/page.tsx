"use client";



import Head from "./head";
import Banner from "@/components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import BottomNav from "@/components/BottomNav";
import Aos from "aos";
import { useEffect, useState } from "react";
import Whatsszapp from "@/components/WhatssappButtom/intex";
import Products from "@/components/Products";


const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
 
    AOS.init();
  }, []);

  return (
    <>
   

    <Head />

      

      {/*Banner*/}

      <section className="w-full h-screen gap-1 py-[0rem]  md:w-full    items-center flex  flex-col md:gap-10 md:py-[1.5rem]">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-2xl w-full   px-1 text-left md:text-3xl font-bold md:w-[80%]  md:text-center  py-[3rem] "
        >
          A Primeira Plataforma com foco na responsabilidade civil
          <span className="text-color" > dos profissionais de harmonização</span>
        </h1>

        <div
          
          className="w-full  items-start md:w-[50%] h-full md:flex md:items-center md:justify-center my-10"
        >
          <h1>Espaço para o video novo</h1>
        </div>
      </section>
      <Products/>
      <section className="w-full h-full  md:w-full  bg-white items-center flex  flex-col md:gap-10 md:py-[1.5rem]">
        <div className="flex flex-col items-center justify-center w-full h-full px-2 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-2xl w-full text-left flex flex-col justify-center items-center  md:text-3xl md:flex-row gap-4 font-bold md:w-[80%]  md:text-center  py-[3rem]"
          >
            Prontuários Planejados
            <span className="text-center">=</span>
            <span
           
              className="text-color"
            >
              {""}
              Segurança Profissional
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-left w-[90%]  md:text-[#54595F] md:w-[60%] md:text-center"
          >
            Nesta plataforma você terá acesso a Termos de consentimento,
            contratos, anamneses, cursos e informações fundamentais para atuar
            com mais segurança jurídica na sua profissão, produzidos por uma{" "}
            {""}
            experiente equipe de Juristas e profissionais de saúde .{" "}
           
          </p>
          <span 
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-color font-bold text-left w-[90%]  md:text-[#54595F] md:w-[60%] md:text-center">
              Baixe documentos editáveis, personalizáveis, protetivos e pautados
              nos princípios da bioética.
          </span>
        </div>
      </section>
      {/*Grid Documentos*/}
      <section className="w-full h-full  bg-white flex items-center flex-col justify-center py-[1.5rem]">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl w-full text-left px-1 md:text-3xl font-bold md:w-[80%]  md:text-center  py-[3rem]"
        >
          Entenda como usar o seu prontuário como principal meio de defesa
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-color"
          >
            {" "}
            da sua atividade profissional
          </span>
        </h1>
        <div className="px-2 grid-cols-1 w-full md:w-[96%] h-full grid md:grid-cols-3 gap-4 mt-20">
          <div className="w-full flex flex-col items-center justify-center mx-auto md:w-full h-full px-4 py-2  gap-4 rounded-md border-2 border-[#ccc]">
            <div className="">
              <img src="/1.svg" alt="Icon" className=" h-20" />
            </div>

            <p className="text-center w-full h-28 text-[#54595F]">
              O{" "}
              <span className="text-color font-bold">
                prontuário juridicamente adequado{" "}
              </span>{" "}
              é o principal meio de defesa da sua atividade profissional.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center mx-auto md:w-full h-full px-4 py-2  gap-4 rounded-md border-2 border-[#ccc]">
            <div className="">
              <img src="/2.svg" alt="Icon" className=" h-20" />
            </div>

            <p className="text-center w-full h-28 text-[#54595F] ">
              Termos de consentimento (TCLE’s) projetados para harmonização,
              focado na <span className="text-color font-bold">prevenção</span>{" "}
              das principais causas de{" "}
              <span className="text-color font-bold">demandas judiciais.</span>
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center mx-auto md:w-full h-full px-4 py-2  gap-4 rounded-md border-2 border-[#ccc]">
            <div className="">
              <img src="/3.svg" alt="Icon" className=" h-20" />
            </div>

            <p className="text-center w-full h-28 text-[#54595F]">
              Use documentos baseados em
              <span className="text-color font-bold">
                {" "}
                princípios Bioéticos, aspectos clínicos e dermatológicos{" "}
              </span>
              dos pacientes
            </p>
          </div>
        </div>
        <div className="px-2 grid-cols-1 w-full md:w-[96%] h-full grid md:grid-cols-3 gap-4 mt-20">
          <div className="w-full flex flex-col items-center justify-center mx-auto md:w-full h-full px-4 py-2  gap-4 rounded-md border-2 border-[#ccc]">
            <div className="">
              <img src="/4.svg" alt="Icon" className=" h-20" />
            </div>

            <p className="text-center w-full h-28 text-[#54595F]">
              Contratos e termos{" "}
              <span className="text-color font-bold">
                editáveis e personalizáveis
              </span>{" "}
              Específicos para cada procedimento e{" "}
              <span className="text-color font-bold">
                projetados para descrever todo o plano de tratamento indicado.
              </span>
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center mx-auto md:w-full h-full px-4 py-2  gap-4 rounded-md border-2 border-[#ccc]">
            <div className="">
              <img src="/5.svg" alt="Icon" className=" h-20" />
            </div>
            <div className="w-full  ">
              <p className="text-center w-full h-28 text-[#54595F]">
                Evite problemas com a subjetividade da
                <span className="text-color font-bold">
                  {" "}
                  percepção de resultados por parte do paciente
                </span>{" "}
                através de documentos compreensíveis e detalhados.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mx-auto md:w-full h-full px-4 py-2  gap-4 rounded-md border-2 border-[#ccc]">
            <div className="">
              <img src="/6.svg" alt="Icon" className=" h-20" />
            </div>

            <div className="w-full  ">
              <p className="text-center w-full h-28 text-[#54595F]">
                Documentos protetivos com ênfase em aspectos psicossociais,
                intercorrências e{" "}
                <span className="text-color font-bold">
                  prontuários focado em atividades de resultado.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/*Banner Video*/}
    
      {/*Banner Categorias*/}
     
   
      {/* Banner Chamada CLiente*/}
      <section className="parallax">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white text-2xl w-full md:text-3xl font-bold md:w-[80%]  text-center  py-[3rem] "
        >
          A Primeira Plataforma jurídica com foco na responsabilidade civil dos{" "}
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-color"
          >
            {" "}
            profissionais da saúde
          </span>
        </h1>
      </section>
      {/*Banner Serviços*/}
      <section className="bg-color">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex-col md:w-[98%] h-full flex md:flex-row  "
        >
          <div className="w-full md:w-[40%] h-[450px] ">
            <img
              src="/mosaico/mosaico_1.jpeg"
              alt="Mosaico_1"
              className="w-full h-full object-cover  border-[2px] border-white  "
            />
          </div>
          <div className="w-full md:w-[30%] h-[450px]  flex flex-col border-[1px] ">
            <div className="w-full h-[50%] bg-black">
              <img
                src="/mosaico/mosaico_2.svg"
                alt="Mosaico_2"
                className="w-full h-full object-cover border-[1px] border-white "
              />
            </div>
            <div className="w-full h-[50%] flex  items-center justify-center  ">
              <div className="w-[50%] h-full">
                <img
                  src="/mosaico/mosaico_3.jpeg"
                  alt="Mosaico_3"
                  className="w-full h-full  object-cover border-[1px] border-white "
                />
              </div>
              <div className="w-[50%] h-full ">
                <img
                  src="/mosaico/mosaico_4.jpeg"
                  alt="Mosaico_4"
                  className="w-full h-full object-cover border-[1px] border-white "
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] h-[450px] bg-blue-800">
            <img
              src="/mosaico/mosaico_5.jpeg"
              alt="Mosaico_5"
              className="w-full h-full object-cover bg-left border-[2px] border-white "
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col py-10 items-center justify-center w-full"
        >
          <p className="text-left w-full md:w-[60%] text-white font-bold md:text-center pb-6 px-4">
            Somos uma empresa de Publicações e Treinamentos, formada por
            professores, juristas e profissionais da saúde, dedicados de modo
            multidisciplinar ao estudo das principais demandas jurídicas da área
            de Harmonização e demais atividades de resultado, buscando difundir
            e publicar conhecimentos fundamentais para segurança das atividades
            de nossos alunos, institutos e clinicas de saúde
          </p>
        </div>
      </section>

  
      
      
      <Whatsszapp/>
      <BottomNav />

    </>
     
  );
};

export default Home;


