import Image from "next/image";
import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>El software inteligente de gestion para negocios</h2>
        <p>
          Helebba es la herramienta en la nube que tiene todo lo que necesitas
          para gestionar tu empresa donde quieras y cuando quieras.
        </p>
        <div>
          <button>Empieza gratis</button>
        </div>
      </div>

      <Image src="/img/banner.jpg" width={500} height={500} />
    </div>
  );
};

export default Banner;
