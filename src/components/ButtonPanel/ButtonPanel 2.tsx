'use client'

import React, { ReactElement } from 'react';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { Button, ConfigProvider } from 'antd';

import { HomeOutlined, NotificationOutlined, PlusCircleOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';

import styles from './ButtonPanel.module.scss';
import theme from '@/theme/*';


function ButtonPanel(): ReactElement {
    const router = useRouter();
    const path = usePathname();

    return (
            <ConfigProvider theme={theme}>
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
            </ConfigProvider>
    );
};

export {ButtonPanel}
