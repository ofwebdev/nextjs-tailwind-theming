import React, { ReactNode } from "react";

import { useTheme } from "../theme/ThemeContext";

interface ThemeProps {
  children: ReactNode;
}

const GlobalStyles: React.FC<ThemeProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return <div className={`theme-${currentTheme}`}>{children}</div>;
};

export default GlobalStyles;
