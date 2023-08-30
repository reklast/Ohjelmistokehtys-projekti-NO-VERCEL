'use client'

import React, { ReactElement } from 'react';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { Button } from 'antd';

import { HomeOutlined, NotificationOutlined, PlusCircleOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';

import styles from './ButtonPanel.module.scss';


function ButtonPanel(): ReactElement {
    const router = useRouter();
    const path = usePathname();

    return (
            <nav className={styles.buttonWrap}>
                <Button htmlType='button' className='button' onClick={() => {
                      if(path !== '/dashboard') router.push('/dashboard')
                    }
                     }>
                    <HomeOutlined />
                </Button>
                <Button htmlType='button' className='button' onClick={() =>{ 
                    if(path !== '/#') router.push('/#')
                    }}>
                    <ScheduleOutlined />
                </Button>
                <Button htmlType='button' className='button' onClick={() =>{ 
                    if(path !== '/#') router.push('/#')
                    }}>
                    <PlusCircleOutlined />
                </Button>
                <Button htmlType='button' className='button' onClick={() =>{ 
                    if(path !== '/dashboard/news') router.push('/dashboard/news')
                    }}>
                    <NotificationOutlined />
                </Button>
                <Button htmlType='button' className='button'  onClick={() => { 
                    if(path !== '/dashboard/user') router.push('/dashboard/user')
                    }}>
                    <UserOutlined />
                </Button>
            </nav>
    );
};

export {ButtonPanel}
