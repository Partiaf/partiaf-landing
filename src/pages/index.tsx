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

        <div className="performance">
          <h6>YOUR BUSINESS, ONE CLICK AWAY</h6>
          <h2>See how your business is performing at all times</h2>
          <p>How about changing hours of work with a simple click? Seganix simplifies your day-to-day, automating tasks and streamlining your accounting and invoicing.</p>
        </div>
        <div className="max_feature">
          <h2>Max than 500 companies already use Seganix</h2>

          <div>
            <div>
              <h2>40 H.</h2>
              <p>Automate 40 hours of work per month</p>
            </div>
            <div>
              <h2>+ 160</h2>
              <p>Process invoices 160 times  faster</p>
            </div>
            <div>
              <h2>80%</h2>
              <p>Get paid 80% faster than with manual processes</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
