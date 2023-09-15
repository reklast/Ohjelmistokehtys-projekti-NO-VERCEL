import { ReactElement } from 'react';
import { ConfigProvider } from 'antd';

import { CustomCalendar } from '@/components/CustomCalendar/CustomCalendar';

import styles from './page.module.scss';
import theme from '@/theme/*';


export default function Calendar(): ReactElement {

  return (
    <ConfigProvider theme={theme}>
    <main className={styles.main}>
      <div className={styles.calendarHolder}>
        <CustomCalendar />
      </div>
    </main>
    </ConfigProvider>
  )
}