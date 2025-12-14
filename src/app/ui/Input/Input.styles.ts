import styled, { keyframes } from "styled-components";

const cursorBlink = keyframes`
  0%, 50% { border-right-color: var(--primary, #00FF00); }
  51%, 100% { border-right-color: transparent; }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 20px;
  letter-spacing: 1px;
  background: var(--input-background, #000000);
  color: var(--input-text, #00ff00);
  border: 3px solid;
  border-color: var(--button-border-dark, #808080)
    var(--button-border-light, #ffffff) var(--button-border-light, #ffffff)
    var(--button-border-dark, #808080);
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.8);
  outline: none;
  text-transform: uppercase;
  transition: background 0.3s, color 0.3s, border-color 0.3s;

  /* CRT monitor text glow */
  text-shadow: 0 0 5px var(--glow-color, rgba(0, 255, 0, 0.5));

  &::placeholder {
    color: var(--input-placeholder, #008800);
    text-shadow: 0 0 3px var(--input-placeholder, #008800);
  }

  &:focus {
    background: var(--input-background, #001100);
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.8),
      0 0 10px var(--glow-color, rgba(0, 255, 0, 0.3));
    animation: ${cursorBlink} 1s infinite;
  }

  /* Selection styling */
  &::selection {
    background: var(--primary, #00ff00);
    color: var(--window-background, #000000);
  }

  @media (max-width: 400px) {
    margin-bottom: 0;
    font-size: 18px;
    padding: 10px 12px;
  }
`;
