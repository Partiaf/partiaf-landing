import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {

  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event: any) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);


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
      
         {/*  <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>  */}
            <div>
            {darkTheme !== undefined && (
              <form action="#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </form>
            )}
          </div>
          
        <Link href="/"><a className="none" >Inicia sesion</a></Link>
        <button> Empieza gratis </button>
      </div>
    </div>
  );
};

export default Header;
