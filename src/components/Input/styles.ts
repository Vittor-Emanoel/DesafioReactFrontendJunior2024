import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;
  position: relative;
  display: flex;

  input {
    width: 100%;
    padding: 15px 15px 15px 60px;
    font-size: 24px;
    background: #ffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    border: 2px solid #ffff;
    transition: border-color 0.2s ease-in;
    appearance: none;
    font-style: italic;
    color: rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid #eee;

    &:focus {
      border: 2px solid ${(props) => props.theme["red"]};
    }
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;

  svg {
    color: red;
  }
`;
