import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SEO from "@/components/seo/seo";
import Banner from "@/sections/home/banner";
import Testimonials from "@/sections/home/testimonials";
import Time from "@/sections/home/time";
import type { NextPage } from "next";
import { useEffect } from "react";

import { FormattedMessage } from 'react-intl'


const Home: NextPage = () => {

  return (
    <>
      <Layout>
        <SEO title="Partiaf el Software de Gestión Inteligente para Pymes" description="Software de gestión empresarial con facturación, contabilidad, inventario y CRM de primer nivel con proyectos en una única plataforma súper intuitiva que se adapta a todo tipo de negocio." />
        <Header  />
         
        <Banner />

        <div className="white_bg">

        <Time />

        <div className="performance">
          <h6><FormattedMessage id="yourBusiness"/></h6>
          <h2><FormattedMessage id="businessTimes"/></h2>
          <p><FormattedMessage id="day-to-day"/></p>
        </div>
        <div className="max_feature">
          <h2><FormattedMessage id="more500"/></h2>

          <div>
            <div>
              <h2>40 H.</h2>
              <p><FormattedMessage id="automate40h"/></p>
            </div>
            <div>
              <h2>+ 160</h2>
              <p><FormattedMessage id="160times"/></p>
            </div>
            <div>
              <h2>80%</h2>
              <p><FormattedMessage id="payments80%"/></p>
            </div>
          </div>
        </div>
        </div>
        <Testimonials />


      </Layout>
    </>
  );
};

export default Home;
