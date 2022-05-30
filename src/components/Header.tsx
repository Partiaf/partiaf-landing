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
          src="/img/seganix2.svg"
          alt="logo"
          height={60}
          width={90}
        />
        </Link>

        <div className={styles.textLeft}>
        <Link href="/pricing">Features</Link>
        <Link href="/pricing">For small business</Link>
        <Link href="/pricing">For freelancers</Link>
        <Link href="/pricing">Pricing</Link>
          <Link href="/pricing">Resources</Link>
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
        </div>
      </div>
      <div className={styles.sectionRight}>
        <p>English</p>
        <Link href="/">Log in</Link>
        <button> Start for free </button>
      </div>
    </div>
  );
};

export default Header;
