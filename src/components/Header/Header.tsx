'use client'
import React, { ReactElement } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { MongoClient } from 'mongodb'


import UserMenu from '@/components/UserMenu/UserMenu';
import db from '@/lib/db';


import styles from './Header.module.scss';
import Link from 'next/link';

function Header(): ReactElement {
  const session  = useSession();

  console.log(session);
  

  

  return (
    <header className={styles.header}>
      <div className={styles.userMenuHolder}>
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
