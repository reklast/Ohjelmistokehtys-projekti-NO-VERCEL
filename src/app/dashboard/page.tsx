import { ReactElement } from "react";
import { ConfigProvider } from "antd";

import { NewsBlock } from "@/components/NewsBlock/NewsBlock";

import styles from "./page.module.scss";
import theme from "@/theme/*";

export default function Home(): ReactElement {
  return (
    <ConfigProvider theme={theme}>
      <main className={styles.main}>
        <div className={styles.newsHolder}>
          <h1 className={styles.newsHeader}>Tiedotteet</h1>
          <NewsBlock />
        </div>
      </main>
    </ConfigProvider>
  );
}
