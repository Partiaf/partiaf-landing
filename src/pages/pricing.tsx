import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SEO from "@/components/seo/seo";
import type { NextPage } from "next";
import styles from '@/styles/Pricing.module.css'
import { useState } from "react";
const Pricing: NextPage = () => {

    const [type, setType] = useState("companies");
    return (
        <>
            <Layout>
                <SEO title="Precios y planes que se adaptan a tus necesidades" description="Descubre los planes asequibles de Holded, diseñados para adaptarse a las necesidades de cualquier negocio. ¡Empieza tu prueba gratis!" />
                <Header />

                <div className={styles.banner}>
                    <h2>Empieza tu prueba gratis</h2>
                    <p>Prueba Partiaf gratis durante 14 dias. No necesitas terjeta de credito.</p>
                </div>

                <div>
                    <div className={styles.pricing_buttons}>
                        <button onClick={() => setType("companies")} className={type == "companies" ? styles.active : ""}>Companies</button>
                        <button onClick={() => setType("freelancers")} className={type == "freelancers" ? styles.active : ""}>Freelancers</button>
                    </div>

                    <div className={styles.pricing_cards}>
                        <div className={styles.card}>
                            <h3>Basic</h3>
                            <p>Simplify your dat-to-day with the esesential features.</p>

                            <div className={styles.price}>
                                60,000 COP<span>/month</span>
                            </div>

                            <button>Start for free</button>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 1,000 invoices per year</span>
                                <span><i className='bx bx-check'></i> 100 free scans per year</span>
                                <span><i className='bx bx-check'></i> 2 users + accountant</span>
                                <span><i className='bx bx-check'></i> 5 synchronized banks</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Includes</h4>
                                <ul>
                                    <li>Invoicing + expenses</li>
                                    <li>Cash Flow</li>
                                    <li>CRM</li>
                                    <li>Project management</li>
                                    <li>Human resources</li>

                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Standard</h3>
                            <p>Simplify your dat-to-day with the esesential features.</p>

                            <div className={styles.price}>
                                100,000 COP<span>/month</span>
                            </div>
                            <button>Start for free</button>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 1,000 invoices per year</span>
                                <span><i className='bx bx-check'></i> 100 free scans per year</span>
                                <span><i className='bx bx-check'></i> 2 users + accountant</span>
                                <span><i className='bx bx-check'></i> 5 synchronized banks</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Includes</h4>
                                <ul>
                                    <li>Invoicing + expenses</li>
                                    <li>Cash Flow</li>
                                    <li>CRM</li>
                                    <li>Project management</li>
                                    <li>Human resources</li>

                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Advanced</h3>
                            <p>Simplify your dat-to-day with the esesential features.</p>

                            <div className={styles.price}>
                                170,000 COP
                            </div>
                            <button>Start for free</button>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 1,000 invoices per year</span>
                                <span><i className='bx bx-check'></i> 100 free scans per year</span>
                                <span><i className='bx bx-check'></i> 2 users + accountant</span>
                                <span><i className='bx bx-check'></i> 5 synchronized banks</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Includes</h4>
                                <ul>
                                    <li>Invoicing + expenses</li>
                                    <li>Cash Flow</li>
                                    <li>CRM</li>
                                    <li>Project management</li>
                                    <li>Human resources</li>

                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Premium</h3>
                            <p>Simplify your dat-to-day with the esesential features.</p>

                            <div className={styles.price}>
                                350,000 COP<span>/month</span>
                            </div>
                            <button>Start for free</button>
                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 1,000 invoices per year</span>
                                <span><i className='bx bx-check'></i> 100 free scans per year</span>
                                <span><i className='bx bx-check'></i> 2 users + accountant</span>
                                <span><i className='bx bx-check'></i> 5 synchronized banks</span>
                            </div>

                            <div className={styles.includes}>
                                <h4>Includes</h4>
                                <ul>
                                    <li>Invoicing + expenses</li>
                                    <li>Cash Flow</li>
                                    <li>CRM</li>
                                    <li>Project management</li>
                                    <li>Human resources</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default Pricing;
