"use client";
import React from "react";
import { useSession } from "next-auth/react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "./AvatarComponent.module.scss";
import SkeletonAvatar from "antd/es/skeleton/Avatar";

function AvatarComponent() {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <div>
      {!session?.user?.image ? (
        <Avatar
          className={styles.userImg}
          size={150}
          gap={3}
          icon={<UserOutlined />}
        />
      ) : (
        <Avatar
          className={styles.userImg}
          size={150}
          gap={3}
          src={session?.user?.image}
        />
      )}
    </div>
  ) : (
    <SkeletonAvatar active size={150} />
  );
}

export default AvatarComponent;
