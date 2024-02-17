import styled from "styled-components";

export const PresentationContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme["gray-500"]};
  padding: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.red};
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
