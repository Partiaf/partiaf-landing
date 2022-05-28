import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.sectionLeft}>
        <Image
          className={styles.logo}
          src="/img/seganix2.svg"
          alt="logo"
          height={60}
          width={90}
        />
        <div className={styles.textLeft}>
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
        </div>
      </div>
      <div className={styles.sectionRight}>
      <i className='bx bx-world bx-rotate-90' ></i>
      <Link href="/"> | Contact</Link>
      </div>
    </div>
  );
};

export default Header;
