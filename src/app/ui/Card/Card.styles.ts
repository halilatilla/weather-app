import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px;
  }
`;
