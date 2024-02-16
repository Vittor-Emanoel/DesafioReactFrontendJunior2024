import { ComponentProps, useContext, useState } from "react";

import { XIcon } from "../../assets/icons/xicon";
import { TaskContext } from "../../contexts/TaskContext";
import { ITask } from "../../entities/Task";
import { Checkbox } from "../CheckBox";
import { Container, DeletedTaskButton } from "./styles";

interface TaskItemProps extends ComponentProps<"input"> {
  item: ITask;
}

export function TaskItem({ item, ...props }: TaskItemProps) {
  const [checked, setChecked] = useState(item.isDone);
  const [isEditing, setIsEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState(item.title);
  const { deleteTasks, updatedItemHandler } = useContext(TaskContext);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(false);
    updatedItemHandler({ id: item.id, title: inputTitle, isDone: checked });
  };

  function handleChecked() {
    const state = !checked;
    setChecked(state);
    updatedItemHandler({ id: item.id, title: inputTitle, isDone: state });
  }

  return (
    <Container $mark={item.isDone}>
      {!isEditing && (
        <div onClick={handleChecked}>
          <Checkbox checked={item.isDone} onChange={handleChecked} />
        </div>
      )}
      {isEditing ? (
        <input
          type="text"
          defaultValue={inputTitle}
          onChange={handleChangeTitle}
          onBlur={handleEdit}
          {...props}
        />
      ) : (
        <input
          type="text"
          onDoubleClick={() => setIsEditing(true)}
          defaultValue={inputTitle}
        />
      )}
      <DeletedTaskButton
        onClick={() => deleteTasks(item.id)}
        data-testid="delete-button"
      >
        <XIcon size={24} />
      </DeletedTaskButton>
    </Container>
  );
}
