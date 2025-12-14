import styled, { keyframes } from "styled-components";

const focusGlow = keyframes`
  0%, 100% { box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 0 2px var(--accent, #00FFFF); }
  50% { box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px 2px var(--accent, #00FFFF); }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px 14px;
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 10px;
  letter-spacing: 0.5px;
  background: var(--input-background, #ffffff);
  color: var(--input-text, #000000);
  border: 3px solid;
  border-color: var(--button-border-dark, #808080)
    var(--button-border-light, #ffffff) var(--button-border-light, #ffffff)
    var(--button-border-dark, #808080);
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  outline: none;
  text-transform: uppercase;
  transition: all 0.2s;

  &::placeholder {
    color: var(--input-placeholder, #808080);
    font-size: 9px;
  }

  &:focus {
    background: var(--input-background, #ffffcc);
    animation: ${focusGlow} 2s ease-in-out infinite;
  }

  /* Selection styling */
  &::selection {
    background: var(--primary, #000080);
    color: #ffffff;
  }

  @media (max-width: 400px) {
    margin-bottom: 0;
    font-size: 9px;
    padding: 10px 12px;

    &::placeholder {
      font-size: 8px;
    }
  }
`;
