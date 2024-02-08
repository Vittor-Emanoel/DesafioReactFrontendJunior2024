import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const CheckboxContainer = styled.div`
  display: inline-block;
`;

const Icon = styled.svg`
  fill: none;
  stroke: green;
  stroke-width: 0.1rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })<CheckboxProps>`
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

const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 150ms;
  border: 1px solid #ccc;
  box-shadow: inset 0px 0px 0px 1px #fff;
  cursor: pointer;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  ...props
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
