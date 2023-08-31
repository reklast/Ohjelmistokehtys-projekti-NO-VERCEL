'use client'
import { ReactElement } from "react";
import { signOut } from "next-auth/react";
import { Button } from "antd";

import styles from './LogOutButton.module.scss'



function LogOutButton(): ReactElement {

    const onLogOut = (): void => {
        signOut({callbackUrl: "/dashboard"})
      };

    return (
          <Button className={styles.logOutButton} onClick={() => onLogOut()}>Kirjaudu Ulos</Button>
    );
};

export {LogOutButton}
