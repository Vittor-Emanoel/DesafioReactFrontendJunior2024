import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  position: relative;

  > input {
    width: 100%;
    padding: 15px 15px 15px 60px;
    font-size: 24px;
    outline: none;
    border: none;
    transition: border-color 0.2s ease-in;
    appearance: none;
    font-style: italic;
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
