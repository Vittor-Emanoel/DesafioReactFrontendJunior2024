import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/default";
import usePersistedState from "../utils/usePersistedState";

interface ThemeProviderValue {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeProviderValue);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === light ? dark : light));

    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
