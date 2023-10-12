'use client'
import React, { ReactElement } from 'react';

import UserMenu from '@/components/UserMenu/UserMenu';
import db from '@/lib/db';


import styles from './Header.module.scss';

function Header(): ReactElement {

  return (
    <header className={styles.header}>
      <div className={styles.userMenuHolder}>
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
