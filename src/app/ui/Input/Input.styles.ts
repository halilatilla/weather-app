import styled, { keyframes } from "styled-components";

const cursorBlink = keyframes`
  0%, 50% { border-right-color: #00FF00; }
  51%, 100% { border-right-color: transparent; }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  font-family: 'VT323', monospace;
  font-size: 20px;
  letter-spacing: 1px;
  background: #000000;
  color: #00FF00;
  border: 3px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.8);
  outline: none;
  text-transform: uppercase;

  /* CRT monitor text glow */
  text-shadow: 0 0 5px #00FF00;

  &::placeholder {
    color: #008800;
    text-shadow: 0 0 3px #008800;
  }

  &:focus {
    background: #001100;
    box-shadow: 
      inset 2px 2px 8px rgba(0, 0, 0, 0.8),
      0 0 10px rgba(0, 255, 0, 0.3);
    animation: ${cursorBlink} 1s infinite;
  }

  /* Selection styling */
  &::selection {
    background: #00FF00;
    color: #000000;
  }

  @media (max-width: 400px) {
    margin-bottom: 0;
    font-size: 18px;
    padding: 10px 12px;
  }
`;
