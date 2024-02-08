import styled from "styled-components";

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
  }

  input {
    font-size: 24px;
    padding: 15px 80px 15px 60px;
    outline: none;
    border: none;
    background: #fff;
    flex: 1;
    cursor: pointer;

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
