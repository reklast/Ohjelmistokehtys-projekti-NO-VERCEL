"use client";

import React, { useContext } from "react";
import { ConfigProvider } from "antd";
import { ContextTheme } from "@/context/ThemeContext";

function AntdThemeWrapper(props: { children: any }) {
  const { children } = props;
  const { currentTheme } = useContext(ContextTheme);

  return (
      <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>
  );
}

export default AntdThemeWrapper;
