import { createContext, ReactNode, useState } from 'react';

const initialState = {
  isDark: false,
  toggleDarkMode: () => {},
};

interface IThemeContext {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<IThemeContext>(initialState);

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps) {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const value = { isDark, toggleDarkMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
