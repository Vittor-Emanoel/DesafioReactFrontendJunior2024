import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { Presentation } from "../../components/presentation";
import { Container } from "./styles";

export function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Tasks />
        <Footer />
      </Container>

      <Presentation />
    </div>
  );
}
