import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ChevronIcon } from "../../assets/icons/chevron";
import { TodoContext } from "../../contexts/TodoContext";
import { Input } from "../Input";
import { HeaderContainer } from "./styles";

export function Header() {
  const [title, setTitle] = useState("");
  const { handleAddTodo } = useContext(TodoContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo({
      id: Math.random().toString(),
      title: title,
      isDone: false,
    });
  };

  return (
    <HeaderContainer>
      <h1>todos</h1>
      <Input
        type="text"
        value={title}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder="What needs to be done?"
        icon={<ChevronIcon />}
      />
    </HeaderContainer>
  );
}
