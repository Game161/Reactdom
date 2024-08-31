// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "../template/Layout";
import { CiFacebook } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";
const Contact = () => {

  const params = useParams();

  return (
    <Layout>
      <section className=" text-center w-full py-5 bg-red-400 to-slate-500">
      <h1 className="text-6xl font-bold">Contact</h1>
      <div className=" flex-co justify-center items-center text-xl">
      <hr />
      <a href="" className="flex justify-center items-center">Name: {params.name}</a>
      </div>
      <hr />
  
      <div className=" flex-co justify-center items-center text-xl">
      <a href="" className="flex justify-center items-center"><CiFacebook/>ณัฐชานนท์ ธนทรรศ์สกุล</a>
      <a href="" className="flex justify-center items-center"><FaPhone />096-987-0945</a>
     
      </div>
    
      </section>
    </Layout>
  );
};

export default Contact;
