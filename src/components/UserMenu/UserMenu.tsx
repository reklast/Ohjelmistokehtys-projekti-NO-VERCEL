'use client'
import React, { ReactElement, useEffect } from 'react';
import { Dropdown, Menu, Avatar, MenuProps } from 'antd';

import styles from './UserMenu.module.scss';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';


function UserMenu(): ReactElement {


  const onLogOut = (): void => {
    signOut({callbackUrl: "/"})
  };

  const session  = useSession();

  const items: MenuProps['items'] = [
        {
          key: '1',
          label: <div>{session?.data && <Link href="/dashboard/user">Profile</Link>}</div>,
        },
        {
          key: '2',
          label: <div>{session?.data ? (
            <Link href="#" onClick={ () => signOut({
              callbackUrl: "/"})}>
                Log Out
              </Link>
          ) : (
            <Link href="/api/auth/signin">Log In</Link>
          )}</div>,
          onClick: onLogOut,
        },
        
      ]

  return (
    <Dropdown
      menu = {{items}}
      placement="bottomRight"
      arrow
      trigger={['click']}
    >
      <div className={styles.userMenu}>
          <div className={styles.userContent}>
            <p className={styles.userName}>user name</p>
            <p className={styles.position}>Job Title</p>
          </div>
        <div className={styles.iconWrapper}>
          <div className={styles.userIcon}>    
              <Avatar shape='circle' className={styles.avatar} />     
          </div>
        </div>
      </div>
    </Dropdown>
  );
}

export default React.memo(UserMenu);
