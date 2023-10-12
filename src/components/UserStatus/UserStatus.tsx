"use client";
import React, { useState } from "react";
import { Select, Space, message } from "antd";
import SkeletonInput from "antd/es/skeleton/Input";
import { useSession } from "next-auth/react";
import {
  CheckCircleTwoTone,
  ClockCircleTwoTone,
  CloseCircleTwoTone,
  StopTwoTone,
} from "@ant-design/icons";

import styles from "./UserStatus.module.scss";
import testUsers from "@/testUsers/testUsers.json";


function UserStatus() {
  // current user session
  const { data: session, status } = useSession();

  //add activity status to components state for fast rerender
  const [activityStatus, setActivityStatus] = useState(
    session?.user?.activityStatus
  );

  // available status list
  const items = [
    {
      value: "Available",
      label: "Available",
    },
    {
      value: "Busy",
      label: "Busy",
    },
    {
      value: "Away",
      label: "Away",
    },
    {
      value: "Offline",
      label: "Offline",
    },
  ];

  // check if current user session is loaded
  if (status === "authenticated") {
    // current user object
    const currentUser = testUsers.filter(
      (user) => user.name === session?.user?.name
    )[0];

    //func to change user status
    const onStatusSelect = (value: any) => {
      session.user.activityStatus = value;
      currentUser.activityStatus = session.user.activityStatus;
      setActivityStatus(session?.user?.activityStatus);
      message.info(`tila on päivitetty!`);
    };

    const activityStatusDisplay = () => {
      switch (activityStatus) {
        case "Available":
          return (
            <div className={styles.status}>
              {activityStatus} <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
          );

        case "Busy":
          return (
            <div className={styles.status}>
              {activityStatus} <CloseCircleTwoTone twoToneColor="#BB2525" />
            </div>
          );

        case "Away":
          return (
            <div className={styles.status}>
              {activityStatus} <ClockCircleTwoTone twoToneColor="#FFCD4B" />
            </div>
          );

        case "Offline":
          return (
            <div className={styles.status}>
              {activityStatus} <StopTwoTone twoToneColor="#A8A196" />
            </div>
          );
        default:
          return (
            <div className={styles.status}>
              {session?.user?.activityStatus}{" "}
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
          );
      }
    };

    return (
      <>
        <div className={styles.activityStatusHolder}>
          {activityStatusDisplay()}
          <Select
            options={items}
            onChange={onStatusSelect}
            defaultValue={currentUser.activityStatus}
            className={styles.statusSelector}
          />
        </div>
      </>
    );
  } else if (status === "loading") {
    return (
      <>
        <div className={styles.skeletonWrap}>
          <Space direction="vertical" className={styles.spaceWrap}>
            <SkeletonInput active size="small" />
            <SkeletonInput active size="small" />
          </Space>
        </div>
      </>
    );
  }
}

export default UserStatus;
