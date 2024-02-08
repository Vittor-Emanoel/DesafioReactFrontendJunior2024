import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div`
  display: inline-block;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: green;
  stroke-width: 0.1rem;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 100px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 150ms;
  border: 1px solid
    ${(props) => (props.checked ? "green" : props.theme["gray-400"])};
  cursor: pointer;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
