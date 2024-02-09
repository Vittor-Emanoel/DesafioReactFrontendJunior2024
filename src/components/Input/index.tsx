import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { IconContainer, InputContainer } from "./styles";

interface InputProps {
  icon?: React.ReactNode;
  placeholder: string;
}

export function Input({ placeholder, icon }: InputProps) {
  const [value, setValue] = useState("");
  const { handleAddItem } = useContext(TodoContext);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleAddItem({
      id: Math.random().toString(),
      title: value,
      isDone: false,
    });
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <input value={value} onChange={handleChange} placeholder={placeholder} />
    </InputContainer>
  );
}
