import { Header } from "../../components/Header";
import { Footer } from "../../components/footer";
import { Main } from "../../components/main";
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
