import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/footer";
import { Container } from "./styles";
export function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
