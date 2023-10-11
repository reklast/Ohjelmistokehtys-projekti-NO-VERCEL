import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

import { LogOutButton } from "@/components/LogOutButton/LogOutButton";
import UserStatus from "@/components/UserStatus/UserStatus";
import AvatarComponent from "@/components/AvatarComponent/AvatarComponent";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";

import styles from "./page.module.scss";

export default async function User() {
  const session = await getServerSession(authConfig);

  return (
    <div className={styles.mainWrap}>
      <h1 className={styles.userName}>{session?.user?.name}</h1>
      <div className={styles.avatarHolder}>
        <AvatarComponent />
      </div>
      <div className={styles.statusHolder}>
        <UserStatus />
      </div>
      <div className={styles.themeSwitchHolder}>
        <ThemeSwitch />
      </div>
      <div className={styles.buttonHolder}>
        <LogOutButton />
      </div>
    </div>
  );
}
