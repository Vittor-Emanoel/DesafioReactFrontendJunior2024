import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { TodoProvider } from "./contexts/TaskContext";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TodoProvider>
        <Home />
        <GlobalStyle />
        <Toaster />
      </TodoProvider>
    </ThemeProvider>
  );
}
