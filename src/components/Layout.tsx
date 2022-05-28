import { NextPage } from "next";
import React from "react";
import styles from '@styles/Layout.module.css'

const Layout: NextPage<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <main className={styles.containerLayout}>{children}</main>
        </>
    )
}

export default Layout;