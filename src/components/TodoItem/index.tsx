import { useState } from "react";
import Xicon from "../../icons/xicon";

import { Checkbox } from "../CheckBox";
import { Container, DeletedTodoButton, Text } from "./styles";

interface TodoItemProps {
  title: string;
  isDone: boolean;
}

export function TodoItem({ title, isDone }: TodoItemProps) {
  const [checked, setChecked] = useState(isDone);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Comer muitoo");

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <Container>
      <div onClick={handleChange}>
        <Checkbox checked={checked} onChange={() => handleCheckboxChange} />
      </div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <Text checked={checked} onDoubleClick={handleDoubleClick}>
          {title}
        </Text>
      )}
      <DeletedTodoButton>
        <Xicon />
      </DeletedTodoButton>
    </Container>
  );
}
