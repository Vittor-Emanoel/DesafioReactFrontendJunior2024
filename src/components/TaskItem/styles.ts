import styled from "styled-components";

interface InputCustomProps {
  $mark?: boolean;
}

export const Container = styled.div<InputCustomProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  div {
    position: absolute;
    top: 6px;
    left: 4px;
    cursor: pointer;
  }

  &:hover button {
    display: block;
  }

  input {
    font-size: 24px;
    padding: 15px 80px 15px 60px;
    outline: none;
    border: none;
    background: #fff;
    flex: 1;
    cursor: pointer;
    width: 100%;
    border: 1px solid ${(props) => props.theme["border"]};
    text-decoration: ${(props) => (props.$mark ? "line-through" : "none")};
    color: ${(props) =>
      props.$mark ? props.theme["completed"] : props.theme["gray-500"]};

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const DeletedTodoButton = styled.button`
  width: 50px;
  position: absolute;
  right: 10px;
  cursor: pointer;
  display: none;

  svg {
    color: rgba(0, 0, 0, 0.4);

    &:hover {
      transition: colors 0.6s ease-out;
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const InputCustom = styled.input<InputCustomProps>``;
