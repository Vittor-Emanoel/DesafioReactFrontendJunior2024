import { Toaster } from "react-hot-toast";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { TaskProvider } from "./contexts/TaskContext";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledThemeProvider theme={theme}>
            <TaskProvider>
              <Home />
              <GlobalStyle />
              <Toaster />
            </TaskProvider>
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
