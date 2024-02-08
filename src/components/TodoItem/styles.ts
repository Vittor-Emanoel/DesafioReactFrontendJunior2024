import styled from "styled-components";

interface TextProps {
  checked: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  p {
    width: 100%;
    height: 65px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 15px 15px 15px 60px;
    font-size: 24px;
    border-top: 1px solid ${(props) => props.theme["border"]};
  }

  input {
    font-size: 24px;
    padding: 15px 80px 15px 60px;
    outline: none;
    border: none;
    background: #fff;
    flex: 1;
    cursor: pointer;
    border-top: 1px solid ${(props) => props.theme["border"]};

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }

    &:focus {
      box-shadow: 0 0 2px 2px #cf7d7d;
    }
  }

  div {
    position: absolute;
    top: 6px;
    left: 4px;
    cursor: pointer;
  }
`;

export const DeletedTodoButton = styled.button`
  width: 50px;
  position: absolute;
  right: 10px;
  cursor: pointer;

  svg {
    color: rgba(0, 0, 0, 0.4);

    &:hover {
      transition: colors 0.6s ease-out;
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const Text = styled.p<TextProps>`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) =>
    props.checked ? props.theme["completed"] : props.theme["gray-500"]};
`;
