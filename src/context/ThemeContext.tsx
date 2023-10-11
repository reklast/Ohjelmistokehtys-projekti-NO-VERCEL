'use client'
import { lightTheme } from "@/theme/*";
import { createContext, useState } from "react";

export const ContextTheme = createContext<any>(lightTheme);

function ThemeContext({ children }: any) {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

return (
    <ContextTheme.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
}

export default ThemeContext;