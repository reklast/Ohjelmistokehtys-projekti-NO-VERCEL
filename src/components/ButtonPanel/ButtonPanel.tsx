"use client";

import React, { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button, Modal } from "antd";

import {
  FrownOutlined,
  HomeOutlined,
  NotificationOutlined,
  PlusCircleOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./ButtonPanel.module.scss";

function ButtonPanel(): ReactElement {
  // Modal state
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const showModal = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.buttonWrap}>
      <Button
        htmlType="button"
        className="button"
        onClick={() => {
          if (path !== "/dashboard") router.push("/dashboard");
        }}
      >
        <HomeOutlined />
      </Button>
      <Button
        htmlType="button"
        className="button"
        onClick={() => {
          if (path !== "/dashboard/calendar")
            router.push("/dashboard/calendar");
        }}
      >
        <ScheduleOutlined />
      </Button>
      <Button
        htmlType="button"
        className="button"
        onClick={showModal}
      >
        <PlusCircleOutlined />
      </Button>
      <Button
        htmlType="button"
        className="button"
        onClick={() => {
          if (path !== "/#") router.push("/#");
        }}
      >
        <NotificationOutlined />
      </Button>
      <Button
        htmlType="button"
        className="button"
        onClick={() => {
          if (path !== "/dashboard/user") router.push("/dashboard/user");
        }}
      >
        <UserOutlined />
      </Button>

      <Modal
        open={open}
        onCancel={handleCancel}
        onOk={handleSubmit}
      >
        Work in progress <FrownOutlined />
      </Modal>
    </nav>
  );
}

export { ButtonPanel };
