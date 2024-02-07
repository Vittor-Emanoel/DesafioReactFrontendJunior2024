import { IconContainer, InputContainer } from "./styles";

interface InputProps {
  icon?: React.ReactNode;
  placeholder: string;
}

export function Input({ placeholder, icon }: InputProps) {
  return (
    <InputContainer>
      {icon && <IconContainer>{icon}</IconContainer>}
      <input placeholder={placeholder} />
    </InputContainer>
  );
}
