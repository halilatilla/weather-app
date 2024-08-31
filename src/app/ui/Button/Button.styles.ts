import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#6e8efb")};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5c7cfa;
  }

  @media (max-width: 400px) {
    border-radius: 4px;
    width: 100%;
  }
`;
