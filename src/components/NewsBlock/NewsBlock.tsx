import { Collapse, CollapsePanelProps } from 'antd';



import styles from './NewsBlock.module.scss';
import { use } from 'react';import connectMongo from '@/utils/connectMongo';
import Test from '@/Models/DbModels';

export const getServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const tests = await Test.find();
    console.log('FETCHED DOCUMENTS');

    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

// TODO: connect DB and remove test object array
const testNews = [
    {
      title: 'uutisen otsikko1',
      date: '12.08',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    },
    {
      title: 'uutisen otsikko2',
      date: '30.07',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    },
    {
      title: 'uutisen otsikko3',
      date: '02.04',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    },
    {
      title: 'uutisen otsikko4',
      date: '29.02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    }
 ];

 const NewsBlock = () => {

  const res:CollapsePanelProps[] = testNews.map((headline, index) => (
      {
        key: `${index}`,
        label: `${headline.date} - ${headline.title}`,
        header: '',
        children: <div className={styles.newsText}>{headline.content}</div>,
        className: styles.panel
      }
      ))

  return (
    <div>
      <Collapse accordion={true} items={res} size='small' className={styles.collapse}/>
      </div>
  )
}

export {NewsBlock};
