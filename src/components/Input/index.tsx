import React, { ComponentProps } from "react";
import { IconContainer, InputContainer } from "./styles";

interface InputProps extends ComponentProps<"input"> {
  type: string;
  icon?: React.ReactNode;
  placeholder: string;
  onChange: (event: any) => void;
  onSubmit: (event: any) => void;
}

export function Input({
  onSubmit,
  onChange,
  placeholder,
  icon,
  title,
  ...props
}: InputProps) {
  return (
    <InputContainer onSubmit={onSubmit}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <input
        value={title}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </InputContainer>
  );
}
