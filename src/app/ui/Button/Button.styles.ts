import styled, { keyframes } from "styled-components";

const pressAnimation = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(2px, 2px); }
  100% { transform: translate(0, 0); }
`;

export const StyledButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) =>
    disabled
      ? "var(--window-border-dark, #808080)"
      : "var(--button-background, #C0C0C0)"};
  color: ${({ disabled }) =>
    disabled
      ? "var(--window-border-darker, #404040)"
      : "var(--button-text, #000000)"};
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 10px;
  padding: 12px 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 3px solid;
  border-color: ${({ disabled }) =>
    disabled
      ? "var(--window-border-dark, #808080) var(--window-border-darker, #404040) var(--window-border-darker, #404040) var(--window-border-dark, #808080)"
      : "var(--button-border-light, #FFFFFF) var(--button-border-dark, #808080) var(--button-border-dark, #808080) var(--button-border-light, #FFFFFF)"};
  box-shadow: ${({ disabled }) =>
    disabled
      ? "none"
      : "inset 1px 1px 0 var(--button-hover, #DFDFDF), inset -1px -1px 0 var(--window-border-darker, #404040)"};
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 120px;
  position: relative;
  overflow: hidden;

  /* Retro hover glow */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      var(--glow-color, rgba(255, 255, 255, 0.4)),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    background: var(--button-hover, #dfdfdf);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    border-color: var(--button-border-dark, #808080)
      var(--button-border-light, #ffffff) var(--button-border-light, #ffffff)
      var(--button-border-dark, #808080);
    box-shadow: inset 2px 2px 4px var(--window-border-darker, #404040);
    animation: ${pressAnimation} 0.2s ease-out;
  }

  /* Disabled state with retro styling */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 10px 16px;
    font-size: 9px;
  }
`;
