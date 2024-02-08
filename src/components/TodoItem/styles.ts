import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  position: relative;
  > input {
    width: 100%;
    padding: 5rem;
    padding: 15px 15px 15px 60px;
    font-size: 24px;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1); */
    outline: none;
    border: 1px solid #e2e2e2;
    transition: border-color 0.2s ease-in;
    appearance: none;
    font-style: italic;
    cursor: pointer;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }

    &:focus {
      box-shadow: 0 0 2px 2px #cf7d7d;
      outline: 0;
    }
  }

  div {
    position: absolute;
    top: 6px;
    left: 4px;
    cursor: pointer;
  }
`;
