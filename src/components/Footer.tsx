import styles from "@styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container_footer}>
        <div className={styles.footer_lists}>
            <ul>
                <h4>ACCESO RAPIDO</h4>
                <li><Link href="/">Crear cuenta</Link></li>
                <li><Link href="/">Iniciar sesion</Link></li>
                <li><Link href="/">Precios</Link></li>
                <li><Link href="/">Academy</Link></li>
            </ul>
            <ul>
            <h4>PRODUCTO</h4>
                <li><Link href="/">ERP para pymes</Link></li>
                <li><Link href="/">Programa de facturacion</Link></li>
                <li><Link href="/">Programa de contabilidad</Link></li>
                <li><Link href="/">Programa CRM</Link></li>
                <li><Link href="/">Gestion de inventario</Link></li>
                <li><Link href="/">Programa de RRHH</Link></li>
                <li><Link href="/">Gestion de proyectos</Link></li>
                <li><Link href="/">Integraciones</Link></li>
                <li><Link href="/">Ver todas las funcionalidades</Link></li>
            </ul>
            <ul>
                <h4>OPORTUNIDADES</h4>
                <li><Link href="/">Asesorias</Link></li>
                <li><Link href="/">Soluciones para developers</Link></li>
                <li><Link href="/">Unete al equipo</Link></li>
                <li><Link href="/">Conocenos</Link></li>
                <li><Link href="/">Historias de exito</Link></li>
            </ul>
            <ul>
                <h4>RECURSOS</h4>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Youtube</Link></li>
                <li><Link href="/">Politica de cookies</Link></li>
                <li><Link href="/">Politica de privacidad</Link></li>
                <li><Link href="/">Terminos y condiciones</Link></li>
                <li><Link href="/">Sitemap</Link></li>
            </ul>
            <ul>
                <h4>IDIOMA</h4>
                <li>
                    <select name="" id="">
                        <option value="">Espanol</option>
                        <option value="">Ingles</option>
                        <option value="">Frances</option>
                    </select></li>
            </ul>
        </div>
        <div className={styles.copy}><p>&copy; 2022 Partiaf. Todos los derechos reservados.</p> <span><Link href="/"><i className='bx bxl-linkedin'></i></Link> <Link href="/"><i className='bx bxl-twitter' ></i></Link> <Link href="/"><a><i className='bx bxl-instagram' ></i></a></Link></span> </div>
    </div>
  );
};

export default Footer;
