import Image from "next/image";
import styles from "./Banner.module.css";


import { FormattedMessage } from 'react-intl'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2><FormattedMessage id="smartSoftware"/></h2>
        <p>
          <FormattedMessage id="toolCloud"/>
         
        </p>
        <div>
          <button><FormattedMessage id="freeStart"/></button>
        </div>
      </div>

      <Image src="/img11.png" width={500} height={500} />
    </div>
  );
};

export default Banner;
