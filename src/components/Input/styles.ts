import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 65px;
  position: relative;
  display: flex;

  input {
    width: 100%;
    padding: 5rem;
    padding: 15px 15px 15px 60px;
    font-size: 24px;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1); */
    outline: none;
    border: 2px solid #ffff;
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
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;

  svg {
    font-weight: bold;
    color: #747264;
  }
`;
