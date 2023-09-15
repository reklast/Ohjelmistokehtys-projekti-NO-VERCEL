'use client'

import React, { ReactElement } from 'react';
import { Calendar } from 'antd';

import styles from './CustomCalendar.module.scss';

// function to disable all dates before today
const onDisabledDate = (date: any): boolean => {
    return(
    new Date() > new Date(date) && new Date().getDate() !== new Date(date).getDate()
     ? true 
     : false
     )
}

const calendarEvents = [];

function CustomCalendar(): ReactElement {
    return(
        <Calendar 
        className={styles.calendar} 
        fullscreen={window.innerWidth > 480 ? true : false} 
        disabledDate={(date): boolean => onDisabledDate(date)}  
        />
            
        
    )
}

export {CustomCalendar};
