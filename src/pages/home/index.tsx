import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { Container, PresentationContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Tasks />
        <Footer />
      </Container>

      <PresentationContainer>
        <small> Desenvolvido com ❤️ por </small>
        <a
          href="https://github.com/vittor-emanoel"
          target="_blank"
          rel="noreferrer"
        >
          @Vittor
        </a>
      </PresentationContainer>
    </div>
  );
}
