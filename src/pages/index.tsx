import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SEO from "@/components/seo/seo";
import Topbar from "@/components/Topbar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Topbar />
      <Layout>
        <SEO title="Inicio" />
        <Header />
      </Layout>
    </>
  );
};

export default Home;
