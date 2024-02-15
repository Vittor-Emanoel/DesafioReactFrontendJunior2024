import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

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
