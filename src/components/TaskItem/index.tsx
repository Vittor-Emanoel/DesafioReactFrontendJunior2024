import { ComponentProps, useContext, useState } from "react";
import Xicon from "../../assets/icons/xicon";

import { TodoContext } from "../../contexts/TodoContext";
import { ITodo } from "../../entities/Todo";
import { Checkbox } from "../CheckBox";
import { Container, DeletedTodoButton } from "./styles";

interface TaskItemProps extends ComponentProps<"input"> {
  title: string;
  isDone: boolean;
  item: ITodo;
}

export function TaskItem({ title, isDone, item, ...props }: TaskItemProps) {
  const [checked, setChecked] = useState(isDone);
  const [isEditing, setIsEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const { deleteItem, updatedItemHandler } = useContext(TodoContext);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
    updatedItemHandler({ id: item.id, title: inputTitle, isDone: checked });
  };

  function handleChange() {
    const newChecked = !checked;
    setChecked(newChecked);
    updatedItemHandler({ id: item.id, title: inputTitle, isDone: newChecked });
  }
  return (
    <Container $mark={checked}>
      <div onClick={handleChange}>
        <Checkbox checked={checked} onChange={handleChange} />
      </div>
      {isEditing ? (
        <input
          type="text"
          defaultValue={inputTitle}
          onChange={handleTextChange}
          autoFocus
          {...props}
        />
      ) : (
        <input
          type="text"
          onDoubleClick={handleDoubleClick}
          defaultValue={inputTitle}
        />
      )}
      <DeletedTodoButton onClick={() => deleteItem(item.id)}>
        <Xicon />
      </DeletedTodoButton>
    </Container>
  );
}
