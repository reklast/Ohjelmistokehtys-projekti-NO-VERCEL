import { ReactElement } from "react";

import { NewsBlock } from "@/components/NewsBlock/NewsBlock";

import styles from "./page.module.scss";
import AddNewsButton from "@/components/AddNewsButton/AddNewsButton";

export default function Home(): ReactElement {
  return (
    <main className={styles.main}>
      <div className={styles.newsHolder}>
        <h1 className={styles.newsHeader}>Tiedotteet</h1>
        <AddNewsButton />
        <NewsBlock />
      </div>
    </main>
  );
}