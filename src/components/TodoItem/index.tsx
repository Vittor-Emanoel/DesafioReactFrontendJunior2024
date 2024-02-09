import { ComponentProps, useContext, useState } from "react";
import Xicon from "../../assets/icons/xicon";

import { TodoContext } from "../../contexts/TodoContext";
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
  const { deleteItem, handleUpdateItem } = useContext(TodoContext);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    handleUpdateItem({ id: item.id, title: text, isDone: checked });
  };

  function handleChange() {
    const newChecked = !checked;
    setChecked(newChecked);
    handleUpdateItem({ id: item.id, title: text, isDone: newChecked });
  }

  return (
    <Container>
      <div onClick={handleChange}>
        <Checkbox checked={checked} onChange={handleChange} />
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
      <DeletedTodoButton onClick={() => deleteItem(item.id)}>
        <Xicon />
      </DeletedTodoButton>
    </Container>
  );
}
