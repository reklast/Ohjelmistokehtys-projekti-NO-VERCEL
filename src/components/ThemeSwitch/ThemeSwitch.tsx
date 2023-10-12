"use client";
import React, { useContext } from "react";
import { Switch } from "antd";
import { ContextTheme } from "@/context/ThemeContext";

import { darkTheme, lightTheme } from "@/theme/*";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";

import styles from "./ThemeSwitch.module.scss";

function ThemeSwitch() {
  const { setCurrentTheme } = useContext(ContextTheme);

  const onSwitchChange = (check: boolean) => {
    const rootEl = document.documentElement.classList;
    !check
      ? (setCurrentTheme(darkTheme), rootEl.replace("light", "dark"))
      : (setCurrentTheme(lightTheme), rootEl.replace("dark", "light"));
  };
  return (
    <div className={styles.themeSwitch}>
      <Switch
        checkedChildren={<BulbFilled />}
        unCheckedChildren={<BulbOutlined />}
        onChange={onSwitchChange}
        defaultChecked
      />
    </div>
  );
}

export default ThemeSwitch;
