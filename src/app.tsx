import { ThemeProvider } from "styled-components";
import { TodoProvider } from "./contexts/TodoContext";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <TodoProvider>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </TodoProvider>
  );
}
