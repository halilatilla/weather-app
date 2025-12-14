import styled from "styled-components";

export const StyledCard = styled.div`
  /* Windows 95 inset panel */
  background: #C0C0C0;
  border: 2px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  box-shadow: inset 1px 1px 0 #404040;
  padding: 16px;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
  }
`;
