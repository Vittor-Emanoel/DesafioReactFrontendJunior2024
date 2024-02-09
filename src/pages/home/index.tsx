import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Todos } from "../../components/Todos";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Todos />
      <Footer />
    </Container>
  );
}
