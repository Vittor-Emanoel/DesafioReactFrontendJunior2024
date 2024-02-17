import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface FiltersButtonProps {
  $isActive: boolean;
}

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  border-top: 1px solid ${(props) => props.theme["border"]};
  padding: 0.8rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    gap: 1rem;
  }

  > button {
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const SummaryTodos = styled.div`
  span {
    font-size: 0.9rem;
  }
`;

export const FiltersButton = styled(NavLink)`
  padding: 0.3rem 0.5rem;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  transition: border ease-in 0.2s;
  text-decoration: none;
  color: ${(props) => props.theme["gray-600"]};

  border: 1px solid ${(props) => props.theme["white"]};

  &.active {
    border: 1px solid ${(props) => props.theme["red"]};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme["red"]};
  }
`;
