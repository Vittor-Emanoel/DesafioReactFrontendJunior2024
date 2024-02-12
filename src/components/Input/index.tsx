import React, { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { IconContainer, InputContainer } from "./styles";

interface InputProps {
  icon?: React.ReactNode;
  placeholder: string;
}

export function Input({ placeholder, icon }: InputProps) {
  const [title, setTitle] = useState("");
  const { handleToggleAllDone, handleAddItem } = useContext(TaskContext);

  const handleChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleAddItem({
      id: Math.random().toString(),
      title,
      isDone: false,
    });
    setTitle("");
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <IconContainer onClick={handleToggleAllDone}>{icon}</IconContainer>
      <input
        value={title}
        onChange={handleChangeTitle}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}
