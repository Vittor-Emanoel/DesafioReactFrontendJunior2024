import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-top: 1.5rem;

  h1 {
    font-size: 88px;
    color: ${(props) => props.theme["red"]};
    font-weight: 200;
    margin-bottom: 1.5rem;
  }
`;
