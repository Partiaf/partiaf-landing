import { NextPage } from "next";
import React from "react";
import styles from '@styles/Layout.module.css'
import Topbar from "./Topbar";

const Layout: NextPage<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
      <Topbar />

            <main className={styles.containerLayout}>{children}</main>
        </>
    )
}

export default Layout;