import { useState } from "react";
import Checkbox from "../Checkbox";
import { InputContainer } from "./styles";

interface InputProps {
  icon?: React.ReactNode;
}

export function TodoItem({ icon }: InputProps) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
  }

  console.log(checked);

  return (
    <InputContainer>
      <div onClick={handleChange}>
        <Checkbox checked={checked} />
      </div>
      <input />
      {/*
      {icon && <IconContainer>{"X"}</IconContainer>} */}
    </InputContainer>
  );
}
