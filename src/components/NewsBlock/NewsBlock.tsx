import { Collapse } from "antd";

import styles from "./NewsBlock.module.scss";
import connectMongo from "@/utils/connectMongo";
import News from "@/Models/DbModelsNews";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export const getNewsFromDB = async () => {
  console.log("CONNECTING TO MONGO");
  await connectMongo();
  console.log("CONNECTED TO MONGO");

  console.log("FETCHING DOCUMENTS");
  const data = await News.find();
  console.log("FETCHED DOCUMENTS");

  return {
    data: JSON.parse(JSON.stringify(data)),
  };
};

const NewsBlock = async () => {
  const getNews = await getNewsFromDB();

  const res = getNews.data.map(
    (
      headline: {
        date: any;
        title: any;
        content:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | PromiseLikeOfReactNode
          | null
          | undefined;
      },
      index: any
    ) => ({
      key: `${index}`,
      label: `${headline.date} - ${headline.title}`,
      header: "",
      children: <div className={styles.newsText}>{headline.content}</div>,
      className: styles.panel,
    })
  );

  return (
    <div>
      <Collapse
        accordion={true}
        items={res}
        size="small"
        className={styles.collapse}
      />
    </div>
  );
};

export { NewsBlock };
