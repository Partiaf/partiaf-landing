import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>El software inteligente que te facilita la gestion de tu negocios</h2>
        <p>
          Partiaf es la herramienta en la nube que tiene todo lo que necesitas
          para gestionar tu negocio de una manera optima y amigable.
        </p>
        <div>
          <button>Empieza gratis</button>
        </div>
      </div>

      <Image src="/img11.png" width={500} height={500} />
    </div>
  );
};

export default Banner;
