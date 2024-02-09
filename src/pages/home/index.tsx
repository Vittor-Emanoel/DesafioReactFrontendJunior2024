import { Header } from "../../components/Header";
import { Todos } from "../../components/Todos";
import { Footer } from "../../components/footer";
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
