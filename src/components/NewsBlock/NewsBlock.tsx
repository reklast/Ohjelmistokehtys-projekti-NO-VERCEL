import { Collapse, CollapsePanelProps } from "antd";

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
import { InferGetServerSidePropsType } from "next";

// TODO: connect DB and remove test object array
const testNews = [
  {
    title: "uutisen otsikko1",
    date: "12.08",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.",
  },
  {
    title: "uutisen otsikko2",
    date: "30.07",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.",
  },
  {
    title: "uutisen otsikko3",
    date: "02.04",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.",
  },
  {
    title: "uutisen otsikko4",
    date: "29.02",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.",
  },
];

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

  const res = getNews.data.slice(getNews.data.length - 5).map(
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
