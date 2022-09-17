import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SEO from "@/components/seo/seo";
import Banner from "@/sections/home/banner";
import Testimonials from "@/sections/home/testimonials";
import Time from "@/sections/home/time";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Helebba el Software de Gestión Inteligente para Pymes" description="Software de gestión empresarial con facturación, contabilidad, inventario y CRM de primer nivel con proyectos en una única plataforma súper intuitiva que se adapta a todo tipo de negocio." />
        <Header />

        <Banner />

        <div className="white_bg">

        <Time />

        <div className="performance">
          <h6>TU NEGOCIO, A UN CLICK DE DISTANCIA</h6>
          <h2>Vea cómo se está desempeñando su negocio en todo momento</h2>
          <p>¿Qué tal cambiar largas horas de trabajo por un simple clic? Helebba simplifica tu día a día, automatizando tareas y agilizando tu contabilidad y facturación.</p>
        </div>
        <div className="max_feature">
          <h2>Más de 500 empresas ya utilizan Helebba</h2>

          <div>
            <div>
              <h2>40 H.</h2>
              <p>Automatice 40 horas de trabajo al mes</p>
            </div>
            <div>
              <h2>+ 160</h2>
              <p>Procesa facturas 160 veces más rápido</p>
            </div>
            <div>
              <h2>80%</h2>
              <p>Reciba pagos un 80 % más rápido que manualmente</p>
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
