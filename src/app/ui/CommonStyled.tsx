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
  background: ${({ $weatherCondition }) => getBackgroundColor($weatherCondition)};
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
    background-image: 
      linear-gradient(rgba(255, 0, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 0, 255, 0.03) 1px, transparent 1px);
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
    background-image: 
      radial-gradient(2px 2px at 20px 30px, #FFFFFF, transparent),
      radial-gradient(2px 2px at 40px 70px, #FFFF00, transparent),
      radial-gradient(1px 1px at 90px 40px, #00FFFF, transparent),
      radial-gradient(2px 2px at 160px 120px, #FF00FF, transparent),
      radial-gradient(1px 1px at 230px 80px, #FFFFFF, transparent),
      radial-gradient(2px 2px at 300px 150px, #00FF00, transparent),
      radial-gradient(1px 1px at 400px 60px, #FFFF00, transparent),
      radial-gradient(2px 2px at 500px 200px, #00FFFF, transparent);
    background-repeat: repeat;
    background-size: 550px 250px;
    animation: ${starTwinkle} 3s ease-in-out infinite;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  /* Windows 95 style window */
  background: #C0C0C0;
  border: 3px solid;
  border-color: #FFFFFF #808080 #808080 #FFFFFF;
  box-shadow: 
    inset 1px 1px 0 #DFDFDF,
    inset -1px -1px 0 #404040,
    4px 4px 0 rgba(0, 0, 0, 0.3);
  padding: 0;
  width: 90%;
  max-width: 650px;
  margin: 1rem;
  position: relative;
  animation: ${crtFlicker} 4s ease-in-out infinite;

  @media (max-width: 600px) {
    width: 95%;
    margin: 0.5rem;
  }
`;

export const WindowTitleBar = styled.div`
  background: linear-gradient(90deg, #000080, #1084D0);
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  user-select: none;
`;

export const WindowTitle = styled.span`
  color: #FFFFFF;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  font-weight: bold;
  text-shadow: 1px 1px 0 #000000;

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
  background: #C0C0C0;
  border: 2px solid;
  border-color: #FFFFFF #808080 #808080 #FFFFFF;
  font-family: 'Press Start 2P', cursive;
  font-size: 8px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:active {
    border-color: #808080 #FFFFFF #FFFFFF #808080;
  }
`;

export const WindowContent = styled.div`
  padding: 1.5rem;
  background: #C0C0C0;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #000080;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 
    2px 2px 0 #FF00FF,
    4px 4px 0 #00FFFF;
  letter-spacing: 2px;

  @media (max-width: 600px) {
    font-size: 1rem;
    text-shadow: 
      1px 1px 0 #FF00FF,
      2px 2px 0 #00FFFF;
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
    #FF0000 0px,
    #FF0000 20px,
    #FF8000 20px,
    #FF8000 40px,
    #FFFF00 40px,
    #FFFF00 60px,
    #00FF00 60px,
    #00FF00 80px,
    #00FFFF 80px,
    #00FFFF 100px,
    #0000FF 100px,
    #0000FF 120px,
    #FF00FF 120px,
    #FF00FF 140px
  );
  margin: 8px 0;
`;

export const PixelDivider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, 
    #808080 0%, 
    #FFFFFF 50%, 
    #808080 100%
  );
  margin: 12px 0;
  position: relative;

  &::after {
    content: "◆";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #C0C0C0;
    padding: 0 8px;
    color: #000080;
    font-size: 10px;
  }
`;
