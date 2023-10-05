import { Collapse, CollapsePanelProps } from 'antd';


import styles from './NewsBlock.module.scss';

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
      <Collapse accordion={true} items={res} size='small' className={styles.collapse}/>
  )
}

export {NewsBlock};
