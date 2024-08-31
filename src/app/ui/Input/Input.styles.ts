import styled from "styled-components";

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;

  &:focus {
    border-color: #6e8efb;
  }

  @media (max-width: 400px) {
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`;
