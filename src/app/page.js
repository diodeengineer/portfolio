"use client";


import styles from "./page.module.css";
import Footer from "./footer/page";
import Header from "./header/page";
import dynamic from "next/dynamic";

const Body = dynamic(() => import("./body/page"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Body />
      </main>

      <Footer />
    </div>
  );
}