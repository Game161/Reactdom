// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "../template/Layout";
const About = () => {
  return (
    <Layout>
      <section className=" text-center w-full bg-red-400">
        <h1 className="text-6xl font-bold">About Me</h1>
        <hr />
        <div className="flex justify-center items-center  py-2">
          <p>ผม นาย ณัฐชานนท์ ธนทรรศ์สกุล ไกด์นำเที่ยวเถื่อนพาหลง</p>
        </div>
        <div className="h-screen bg2"></div>
        <hr />
      </section>
    </Layout>
  );
};

export default About;
