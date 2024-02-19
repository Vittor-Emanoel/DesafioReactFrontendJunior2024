import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { PresentationContainer } from "./styles";

export function Presentation() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <PresentationContainer>
      <small>Double-click to edit a todo</small>
      <small> Desenvolvido com ❤️ por </small>

      <a
        href="https://github.com/vittor-emanoel"
        target="_blank"
        rel="noreferrer"
      >
        @Vittor
      </a>

      <button type="button" onClick={toggleTheme}>
        click
      </button>
    </PresentationContainer>
  );
}
