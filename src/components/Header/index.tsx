import { useContext } from "react";
import { ChevronIcon } from "../../assets/icons/chevron";
import { TodoContext } from "../../contexts/TodoContext";
import { Input } from "../Input";
import { HeaderContainer } from "./styles";

export function Header() {
  const { handleAddTodo } = useContext(TodoContext);

  return (
    <HeaderContainer>
      <h1>todos</h1>
      <Input placeholder="What needs to be done?" icon={<ChevronIcon />} />
    </HeaderContainer>
  );
}
