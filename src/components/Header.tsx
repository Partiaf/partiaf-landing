import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.sectionLeft}>
        <Link href="/">

        <Image
          className={styles.logo}
          src="/img/logo.svg"
          alt="logo"
          height={50}
          width={60}
        />
        </Link>

        <div className={styles.textLeft}>
        <Link href="/pricing">Funcionalidades</Link>
        <Link href="/pricing">Para empresas</Link>
        <Link href="/pricing">Para emprendedores</Link>
        <Link href="/pricing">Precios</Link>
          <Link href="/pricing">Recursos</Link>
        </div>
      </div>
      <div className={styles.sectionRight}>
        {/* <p>English</p> */}
        <Link href="/">Inicia sesion</Link>
        <button> Empieza gratis </button>
      </div>
    </div>
  );
};

export default Header;
