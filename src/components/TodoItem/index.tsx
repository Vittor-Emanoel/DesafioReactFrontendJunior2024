import { ComponentProps, useState } from "react";
import Xicon from "../../assets/icons/xicon";

import { ITodo } from "../../entities/Todo";
import { Checkbox } from "../CheckBox";
import { Container, DeletedTodoButton, Text } from "./styles";

interface TodoItemProps extends ComponentProps<"input"> {
  title: string;
  isDone: boolean;
  item: ITodo;
}

export function TodoItem({ title, isDone, item, ...props }: TodoItemProps) {
  const [checked, setChecked] = useState(isDone);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(title);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <Container>
      <div onClick={handleChange}>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
      </div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          autoFocus
          {...props}
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
