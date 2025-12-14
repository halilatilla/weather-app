import getBackgroundColor from "@/lib/getBackgroundColor";
import styled, { keyframes } from "styled-components";

const crtFlicker = keyframes`
  0% { opacity: 0.97; }
  50% { opacity: 0.99; }
  100% { opacity: 0.97; }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

export const DynamicBackground = styled.div<{ $weatherCondition: string }>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $weatherCondition }) =>
    getBackgroundColor($weatherCondition)};
  transition: background 0.5s ease-in-out;
  position: relative;

  /* Retro grid pattern overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        var(--scanline-color, rgba(255, 0, 255, 0.03)) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        var(--scanline-color, rgba(255, 0, 255, 0.03)) 1px,
        transparent 1px
      );
    background-size: 20px 20px;
    pointer-events: none;
  }

  /* Animated stars for night effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
        2px 2px at 20px 30px,
        var(--accent, #ffffff),
        transparent
      ),
      radial-gradient(2px 2px at 40px 70px, var(--accent, #ffff00), transparent),
      radial-gradient(1px 1px at 90px 40px, var(--accent, #00ffff), transparent),
      radial-gradient(
        2px 2px at 160px 120px,
        var(--secondary, #ff00ff),
        transparent
      ),
      radial-gradient(
        1px 1px at 230px 80px,
        var(--accent, #ffffff),
        transparent
      ),
      radial-gradient(
        2px 2px at 300px 150px,
        var(--primary, #00ff00),
        transparent
      ),
      radial-gradient(
        1px 1px at 400px 60px,
        var(--accent, #ffff00),
        transparent
      ),
      radial-gradient(
        2px 2px at 500px 200px,
        var(--accent, #00ffff),
        transparent
      );
    background-repeat: repeat;
    background-size: 550px 250px;
    animation: ${starTwinkle} 3s ease-in-out infinite;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  /* Themed window */
  background: var(--window-background, #c0c0c0);
  border: 3px solid;
  border-color: var(--window-border-light, #ffffff)
    var(--window-border-dark, #808080) var(--window-border-dark, #808080)
    var(--window-border-light, #ffffff);
  box-shadow: var(
    --window-shadow,
    inset 1px 1px 0 #dfdfdf,
    inset -1px -1px 0 #404040,
    4px 4px 0 rgba(0, 0, 0, 0.3)
  );
  padding: 0;
  width: 90%;
  max-width: 650px;
  margin: 1rem;
  position: relative;
  z-index: 1;
  animation: ${crtFlicker} 4s ease-in-out infinite;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;

  @media (max-width: 600px) {
    width: 95%;
    margin: 0.5rem;
  }
`;

export const WindowTitleBar = styled.div`
  background: linear-gradient(
    90deg,
    var(--title-bar-start, #000080),
    var(--title-bar-end, #1084d0)
  );
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  user-select: none;
  transition: background 0.3s;
`;

export const WindowTitle = styled.span`
  color: var(--title-bar-text, #ffffff);
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 10px;
  font-weight: bold;
  text-shadow: 1px 1px 0 #000000;
  transition: color 0.3s;

  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 2px;
`;

export const WindowButton = styled.button`
  width: 16px;
  height: 14px;
  background: var(--button-background, #c0c0c0);
  border: 2px solid;
  border-color: var(--button-border-light, #ffffff)
    var(--button-border-dark, #808080) var(--button-border-dark, #808080)
    var(--button-border-light, #ffffff);
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 8px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--button-text, #000000);
  transition: background 0.3s, border-color 0.3s, color 0.3s;

  &:active {
    border-color: var(--button-border-dark, #808080)
      var(--button-border-light, #ffffff) var(--button-border-light, #ffffff)
      var(--button-border-dark, #808080);
  }
`;

export const WindowContent = styled.div`
  padding: 1.5rem;
  background: var(--content-background, #c0c0c0);
  transition: background 0.3s;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--text-accent, #000080);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: var(--font-primary, "Press Start 2P", cursive);
  text-shadow: var(--text-shadow, 2px 2px 0 #ff00ff, 4px 4px 0 #00ffff);
  letter-spacing: 2px;
  transition: color 0.3s, text-shadow 0.3s;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  gap: 4px;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 8px;
  }
`;

/* Retro decorative elements */
export const RetroStripe = styled.div`
  height: 8px;
  background: repeating-linear-gradient(
    90deg,
    var(--error, #ff0000) 0px,
    var(--error, #ff0000) 20px,
    #ff8000 20px,
    #ff8000 40px,
    #ffff00 40px,
    #ffff00 60px,
    var(--primary, #00ff00) 60px,
    var(--primary, #00ff00) 80px,
    var(--accent, #00ffff) 80px,
    var(--accent, #00ffff) 100px,
    var(--text-accent, #0000ff) 100px,
    var(--text-accent, #0000ff) 120px,
    var(--secondary, #ff00ff) 120px,
    var(--secondary, #ff00ff) 140px
  );
  margin: 8px 0;
  transition: background 0.3s;
`;

export const PixelDivider = styled.div`
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--window-border-dark, #808080) 0%,
    var(--window-border-light, #ffffff) 50%,
    var(--window-border-dark, #808080) 100%
  );
  margin: 12px 0;
  position: relative;

  &::after {
    content: "◆";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--content-background, #c0c0c0);
    padding: 0 8px;
    color: var(--text-accent, #000080);
    font-size: 10px;
    transition: background 0.3s, color 0.3s;
  }
`;
