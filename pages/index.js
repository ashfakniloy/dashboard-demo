import React from "react";
import Card from "../components/Dashboard/Card";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 h-[2000px]">
        <h1 className="text-xl font-semibold text-slate-800">
          Admin Dashboard
        </h1>
        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
