import React from "react";
import styles from "./Testimonials.module.css";

import { FormattedMessage } from 'react-intl'

const Testimonials = () => {
  return (
    <>
      <div className={styles.performance}>
        <h6><FormattedMessage id="reviews"/></h6>
        <h2><FormattedMessage id="aboutUs"/></h2>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.card}>
          <h5><FormattedMessage id="veryHappy1"/></h5>
          <p>
           <FormattedMessage id="veryHappy1p"/>
          </p>
          <div className={styles.stars}>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

          <h6>Alberto Velarde</h6>
          <span>21 feb 2022</span>
        </div>
        <div className={styles.card}>
           <h5><FormattedMessage id="veryHappy1"/></h5>
          <p>
           <FormattedMessage id="veryHappy1p"/>
          </p>
          <div className={styles.stars}>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

          <h6>Alberto Velarde</h6>
          <span>21 feb 2022</span>
        </div>
        <div className={styles.card}>
          <h5><FormattedMessage id="veryHappy2"/></h5>
          <p>
           <FormattedMessage id="veryHappy2p"/>
          </p>
          <div className={styles.stars}>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

          <h6>Alberto Velarde</h6>
          <span>21 feb 2022</span>
        </div>
        <div className={styles.card}>
           <h5><FormattedMessage id="veryHappy3"/></h5>
          <p>
           <FormattedMessage id="veryHappy3p"/>
          </p>
          <div className={styles.stars}>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

          <h6>Alberto Velarde</h6>
          <span>21 feb 2022</span>
        </div>
        <div className={styles.card}>
          <h5><FormattedMessage id="veryHappy4"/></h5>
          <p>
           <FormattedMessage id="veryHappy4p"/>
          </p>
          <div className={styles.stars}>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonials;
