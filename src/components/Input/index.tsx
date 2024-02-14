import React, { ComponentProps, useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { IconContainer, InputContainer } from "./styles";

interface InputProps extends ComponentProps<"input"> {
  icon?: React.ReactNode;
  placeholder: string;
}

export function Input({ placeholder, icon }: InputProps) {
  const [title, setTitle] = useState("");
  const { handleToggleAllDone, handleAddItem } = useContext(TaskContext);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      {icon && (
        <IconContainer onClick={handleToggleAllDone}>{icon}</IconContainer>
      )}
      <input
        value={title}
        onChange={handleChangeTitle}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}
