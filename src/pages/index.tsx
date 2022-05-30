import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SEO from "@/components/seo/seo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Inicio" />
        <Header />
      </Layout>
    </>
  );
};

export default Home;
