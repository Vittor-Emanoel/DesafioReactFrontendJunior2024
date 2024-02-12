import styled from "styled-components";

interface TextProps {
  checked: boolean;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input {
    font-size: 24px;
    padding: 15px 80px 15px 60px;
    outline: none;
    border: none;
    background: #fff;
    flex: 1;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme["border"]};

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  div {
    position: absolute;
    top: 6px;
    left: 4px;
    cursor: pointer;
  }

  &:hover button {
    display: block;
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

export const Text = styled.input<TextProps>`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) =>
    props.checked ? props.theme["completed"] : props.theme["gray-500"]};
`;
