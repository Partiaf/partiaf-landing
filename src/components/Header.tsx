import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={ styles.containerHeader}>
      <div className={styles.sectionLeft}>
        <Link href="/">

        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="logo"
          height={80}
          width={150}
        />
        </Link>

        <div className={styles.textLeft}>
        <Link href="/pricing">Funcionalidades</Link>
        <Link href="/pricing">Para empresas</Link>
        <Link href="/pricing">Precios</Link>
          <Link href="/pricing">Recursos</Link>
        </div>
      
      </div>
      <div className={styles.sectionRight}>
        {/* <p>English</p> */}
        <Link href="/"><a className="none" >Inicia sesion</a></Link>
        <button> Empieza gratis </button>
      </div>
    </div>
  );
};

export default Header;
