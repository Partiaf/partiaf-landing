import styles from "@styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import  LenguajeSelect  from "./LenguajeSelect";


import { FormattedMessage } from 'react-intl'

const Footer = () => {
  
    return (
    <div className={styles.container_footer}>
        <div className={styles.footer_lists}>
            <ul>
                <h4><FormattedMessage id="title"/></h4>
                <li><Link href="/"><FormattedMessage id="account" /></Link></li>
                <li><Link href="/"><FormattedMessage id="logIn"/></Link></li>
                <li><Link href="/"><FormattedMessage id="prices"/></Link></li>
                <li><Link href="/"><FormattedMessage id="academy"/></Link></li>
            </ul>
            <ul>
            <h4><FormattedMessage id="product"/></h4>
                <li><Link href="/"><FormattedMessage id="pymes"/></Link></li>
                <li><Link href="/"><FormattedMessage id="program"/></Link></li>
                <li><Link href="/"><FormattedMessage id="accounting"/></Link></li>
                <li><Link href="/"><FormattedMessage id="programCRM"/></Link></li>
                <li><Link href="/"><FormattedMessage id="inventory"/></Link></li>
                <li><Link href="/"><FormattedMessage id="ProgramHR"/></Link></li>
                <li><Link href="/"><FormattedMessage id="projectManagement"/></Link></li>
                <li><Link href="/"><FormattedMessage id="integrations"/></Link></li>
                <li><Link href="/"><FormattedMessage id="features"/></Link></li>
            </ul>
            <ul>
                <h4><FormattedMessage id="opportunities"/></h4>
                <li><Link href="/"><FormattedMessage id="consultants"/></Link></li>
                <li><Link href="/"><FormattedMessage id="solutionsDev"/></Link></li>
                <li><Link href="/"><FormattedMessage id="joinTeam"/></Link></li>
                <li><Link href="/"><FormattedMessage id="meetUs"/></Link></li>
                <li><Link href="/"><FormattedMessage id="successStories"/></Link></li>
            </ul>
            <ul>
                <h4><FormattedMessage id="resources"/></h4>
                <li><Link href="/"><FormattedMessage id="blog"/></Link></li>
                <li><Link href="/"><FormattedMessage id="youtube"/></Link></li>
                <li><Link href="/"><FormattedMessage id="cookie"/></Link></li>
                <li><Link href="/"><FormattedMessage id="privacyPolicy"/></Link></li>
                <li><Link href="/"><FormattedMessage id="teamConditions"/></Link></li>
                <li><Link href="/"><FormattedMessage id="sitemap"/></Link></li>
            </ul>
           <LenguajeSelect/>
        </div>
        <div className={styles.copy}><p>&copy; 2022 Partiaf. <FormattedMessage id="reserved"/></p> <span><Link href="/"><i className='bx bxl-linkedin'></i></Link> <Link href="/"><i className='bx bxl-twitter' ></i></Link> <Link href="/"><a><i className='bx bxl-instagram' ></i></a></Link></span> </div>
    </div>
  );
};

export default Footer;


