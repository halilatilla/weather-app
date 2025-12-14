import styled, { keyframes } from "styled-components";

// ============ ANIMATIONS ============

// Live indicator pulse
const livePulse = keyframes`
  0%, 100% { 
    opacity: 1;
    box-shadow: 0 0 10px #FF0000, 0 0 20px #FF0000;
  }
  50% { 
    opacity: 0.7;
    box-shadow: 0 0 5px #FF0000, 0 0 10px #FF0000;
  }
`;

// Subtle head movement
const headBob = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-1px) rotate(0.5deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(-1px) rotate(-0.5deg); }
`;

// Eye blink animation
const eyeBlink = keyframes`
  0%, 45%, 55%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.1); }
`;

// Paper/notes subtle movement
const paperHold = keyframes`
  0%, 100% { transform: rotate(-5deg) translateY(0); }
  50% { transform: rotate(-3deg) translateY(-2px); }
`;

// News ticker scroll
const tickerScroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Typing cursor blink
const cursorBlink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Speech bubble appear
const bubbleAppear = keyframes`
  0% { 
    opacity: 0; 
    transform: scale(0.8);
  }
  100% { 
    opacity: 1; 
    transform: scale(1);
  }
`;

// CRT flicker
const crtFlicker = keyframes`
  0% { opacity: 0.98; }
  5% { opacity: 0.95; }
  10% { opacity: 0.98; }
  50% { opacity: 0.96; }
  100% { opacity: 0.98; }
`;

// Scanline animation
const scanlineMove = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 4px; }
`;

// Studio light glow
const studioLightGlow = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

// ============ MAIN CONTAINER ============

export const StudioContainer = styled.div<{ $isMinimized?: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: ${({ $isMinimized }) => $isMinimized ? '200px' : '500px'};
  height: ${({ $isMinimized }) => $isMinimized ? '50px' : '340px'};
  background: linear-gradient(180deg, #1a1a3e 0%, #0d0d2b 50%, #0a0a20 100%);
  border: 4px solid #333366;
  border-radius: 8px;
  overflow: hidden;
  z-index: 100;
  box-shadow: 
    0 0 20px rgba(0, 0, 0, 0.8),
    inset 0 0 30px rgba(0, 100, 200, 0.1),
    8px 8px 0px 0px rgba(0, 0, 0, 0.3);
  animation: ${crtFlicker} 4s ease-in-out infinite;
  transition: all 0.3s ease-in-out;

  /* CRT scanlines overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.15) 2px,
      rgba(0, 0, 0, 0.15) 4px
    );
    pointer-events: none;
    z-index: 10;
    animation: ${scanlineMove} 0.1s linear infinite;
  }

  /* CRT screen curve effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 60%,
      rgba(0, 0, 0, 0.3) 100%
    );
    pointer-events: none;
    z-index: 11;
  }

  @media (max-width: 1200px) {
    width: ${({ $isMinimized }) => $isMinimized ? '180px' : '420px'};
    height: ${({ $isMinimized }) => $isMinimized ? '45px' : '300px'};
  }

  @media (max-width: 900px) {
    width: ${({ $isMinimized }) => $isMinimized ? '160px' : '350px'};
    height: ${({ $isMinimized }) => $isMinimized ? '40px' : '280px'};
    bottom: 10px;
    left: 10px;
  }

  @media (max-width: 650px) {
    /* On mobile, hide when minimized, show compact version when expanded */
    width: ${({ $isMinimized }) => $isMinimized ? '140px' : 'calc(100% - 20px)'};
    height: ${({ $isMinimized }) => $isMinimized ? '40px' : '320px'};
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
`;

// Toggle button to minimize/expand
export const ToggleButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  background: #CC0000;
  border: 3px solid;
  border-color: #FF6666 #660000 #660000 #FF6666;
  border-radius: 4px;
  color: #FFFFFF;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;

  &:hover {
    background: #FF0000;
  }

  &:active {
    border-color: #660000 #FF6666 #FF6666 #660000;
  }

  @media (max-width: 900px) {
    width: 24px;
    height: 24px;
    font-size: 8px;
  }
`;

// Minimized view content
export const MinimizedContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0 45px 0 15px;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  color: #00FF00;
  text-shadow: 0 0 5px #00FF00;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    font-size: 8px;
    padding: 0 40px 0 10px;
  }
`;

// ============ LIVE INDICATOR ============

export const LiveIndicator = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 5;
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  color: #FF0000;
  text-shadow: 0 0 10px #FF0000;
`;

export const LiveDot = styled.div`
  width: 14px;
  height: 14px;
  background: #FF0000;
  border-radius: 50%;
  animation: ${livePulse} 1s ease-in-out infinite;
`;

export const LiveText = styled.span`
  letter-spacing: 3px;
`;

// ============ STUDIO BACKGROUND ============

export const StudioBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  background: linear-gradient(
    180deg,
    #2a2a5e 0%,
    #1a1a4e 40%,
    #151540 100%
  );
  overflow: hidden;
`;

// Studio lights
export const StudioLight = styled.div<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 10px;
  ${({ $position }) => $position === 'left' ? 'left: 15px;' : 'right: 15px;'}
  width: 25px;
  height: 40px;

  /* Light fixture */
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    background: #444;
    border: 2px solid #222;
    top: 0;
  }

  /* Light beam */
  &::after {
    content: "";
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 60px solid rgba(255, 255, 200, 0.08);
    animation: ${studioLightGlow} 2s ease-in-out infinite;
    ${({ $position }) => $position === 'right' ? 'animation-delay: 0.5s;' : ''}
  }
`;

// ============ NEWS DESK ============

export const NewsDesk = styled.div`
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  height: 65px;
  background: linear-gradient(
    180deg,
    #8B4513 0%,
    #654321 20%,
    #5D3A1A 50%,
    #4A2F15 100%
  );
  border-top: 4px solid #A0522D;
  border-bottom: 3px solid #3D2512;
  box-shadow: 
    inset 0 3px 6px rgba(255, 255, 255, 0.1),
    0 -5px 15px rgba(0, 0, 0, 0.5);

  /* Wood grain texture */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 50px,
      rgba(0, 0, 0, 0.1) 50px,
      rgba(0, 0, 0, 0.1) 52px
    );
  }

  /* NEWS label */
  &::after {
    content: "WEATHER";
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Press Start 2P', cursive;
    font-size: 14px;
    color: #FFD700;
    text-shadow: 
      2px 2px 0 #8B0000,
      0 0 10px #FFD700;
    letter-spacing: 2px;
  }

  @media (max-width: 650px) {
    bottom: 80px;
    height: 55px;
    &::after {
      font-size: 11px;
    }
  }
`;

// ============ MICROPHONE ============

export const Microphone = styled.div`
  position: absolute;
  bottom: 80px;
  left: 10px;
  z-index: 3;

  /* Mic head */
  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 24px;
    background: linear-gradient(
      90deg,
      #888 0%,
      #CCC 30%,
      #999 60%,
      #777 100%
    );
    border-radius: 10px 10px 5px 5px;
    border: 3px solid #555;
    bottom: 0;
    left: 0;

    /* Mic grill pattern */
    background-image: repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.2) 3px,
      rgba(0, 0, 0, 0.2) 6px
    );
  }

  /* Mic stand */
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 28px;
    background: linear-gradient(90deg, #666, #999, #666);
    bottom: -28px;
    left: 7px;
    border-radius: 3px;
  }

  @media (max-width: 650px) {
    bottom: 90px;
  }
`;

// ============ PIXEL CHARACTER ============

export const CharacterContainer = styled.div`
  position: absolute;
  bottom: 70px;
  left: 35px;
  z-index: 2;

  @media (max-width: 650px) {
    left: 20px;
    bottom: 80px;
  }
`;

export const PixelCharacter = styled.div`
  width: 120px;
  height: 130px;
  position: relative;
  image-rendering: pixelated;

  @media (max-width: 650px) {
    width: 100px;
    height: 110px;
  }
`;

// Character Head
export const Head = styled.div`
  position: absolute;
  width: 52px;
  height: 46px;
  background: #E8C4A0;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  border: 3px solid #B8956A;
  animation: ${headBob} 4s ease-in-out infinite;

  /* Hair */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -5px;
    right: -5px;
    height: 18px;
    background: #5D4037;
    border: 3px solid #3E2723;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
  }

  @media (max-width: 650px) {
    width: 44px;
    height: 38px;
  }
`;

// Face features
export const Face = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 28px;

  /* Eyes */
  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    background: #1a1a1a;
    border-radius: 50%;
    top: 6px;
    left: 5px;
    box-shadow: 22px 0 0 #1a1a1a;
    animation: ${eyeBlink} 4s ease-in-out infinite;
  }

  /* Mouth */
  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: #C17A6A;
    border-radius: 0 0 6px 6px;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 650px) {
    width: 34px;
    height: 24px;
    &::before {
      width: 6px;
      height: 6px;
      box-shadow: 18px 0 0 #1a1a1a;
    }
  }
`;

// Suit/Body
export const Body = styled.div`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 58px;
  background: #3F51B5;
  border: 3px solid #1A237E;
  border-radius: 6px 6px 0 0;

  /* Suit collar/lapels */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 16px;
    background: linear-gradient(
      90deg,
      #1A237E 0%,
      #1A237E 25%,
      transparent 25%,
      transparent 75%,
      #1A237E 75%,
      #1A237E 100%
    );
  }

  /* Shirt visible part */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 22px;
    height: 20px;
    background: #FFFFFF;
  }

  @media (max-width: 650px) {
    width: 68px;
    height: 48px;
    top: 40px;
  }
`;

// Tie
export const Tie = styled.div`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 36px;
  background: #D32F2F;
  clip-path: polygon(30% 0, 70% 0, 100% 15%, 65% 100%, 35% 100%, 0% 15%);
  z-index: 1;
  border: 2px solid #B71C1C;

  @media (max-width: 650px) {
    width: 12px;
    height: 30px;
    top: 40px;
  }
`;

// Arms and hands holding paper
export const Arms = styled.div`
  position: absolute;
  top: 62px;
  left: 50%;
  transform: translateX(-50%);
  width: 105px;
  height: 45px;

  /* Left arm */
  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 40px;
    background: #3F51B5;
    border: 3px solid #1A237E;
    left: 0;
    top: 0;
    border-radius: 0 0 6px 6px;
  }

  /* Right arm */
  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 40px;
    background: #3F51B5;
    border: 3px solid #1A237E;
    right: 0;
    top: 0;
    border-radius: 0 0 6px 6px;
  }

  @media (max-width: 650px) {
    width: 88px;
    height: 38px;
    top: 52px;
    &::before, &::after {
      width: 15px;
      height: 34px;
    }
  }
`;

// Hands
export const Hands = styled.div`
  position: absolute;
  top: 98px;
  left: 50%;
  transform: translateX(-50%);
  width: 95px;
  height: 18px;

  /* Left hand */
  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 14px;
    background: #E8C4A0;
    border: 3px solid #B8956A;
    border-radius: 4px;
    left: 6px;
    top: 0;
  }

  /* Right hand */
  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 14px;
    background: #E8C4A0;
    border: 3px solid #B8956A;
    border-radius: 4px;
    right: 6px;
    top: 0;
  }

  @media (max-width: 650px) {
    top: 82px;
    width: 80px;
    &::before, &::after {
      width: 14px;
      height: 12px;
    }
  }
`;

// Paper/Notes
export const Paper = styled.div`
  position: absolute;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 34px;
  background: #FFFDE7;
  border: 3px solid #FBC02D;
  z-index: 1;
  animation: ${paperHold} 3s ease-in-out infinite;

  /* Paper lines */
  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    right: 5px;
    height: 3px;
    background: #90CAF9;
    box-shadow: 
      0 7px 0 #90CAF9,
      0 14px 0 #90CAF9;
  }

  @media (max-width: 650px) {
    top: 78px;
    width: 40px;
    height: 28px;
  }
`;

// ============ NEWS TICKER ============

export const NewsTicker = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
  border-top: 4px solid #FF0000;
  overflow: hidden;
  z-index: 4;

  @media (max-width: 650px) {
    height: 80px;
  }
`;

export const TickerLabel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, #CC0000, #990000);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  color: #FFFFFF;
  text-shadow: 2px 2px 0 #000;
  z-index: 2;
  border-right: 3px solid #FF0000;

  &::after {
    content: "";
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 12px solid #990000;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
  }

  @media (max-width: 650px) {
    width: 80px;
    font-size: 8px;
  }
`;

export const TickerContent = styled.div`
  position: absolute;
  left: 115px;
  right: 0;
  top: 0;
  height: 35px;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 650px) {
    left: 95px;
  }
`;

export const TickerText = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  color: #FFFFFF;
  white-space: nowrap;
  animation: ${tickerScroll} 20s linear infinite;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);

  @media (max-width: 650px) {
    font-size: 8px;
  }
`;

// ============ SPEECH BUBBLE (Classic Pixel Art Style) ============

export const SpeechBubbleContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 25px;
  left: 180px;
  z-index: 5;

  @media (max-width: 650px) {
    left: 140px;
    right: 15px;
  }
`;

export const SpeechBubble = styled.div`
  background: #FFFFFF;
  position: relative;
  padding: 18px 20px;
  animation: ${bubbleAppear} 0.3s ease-out;
  image-rendering: pixelated;
  
  /* Chunky pixel border - multiple layers for thickness */
  border: 5px solid #000000;
  box-shadow:
    /* Outer black border pixels */
    -5px 0 0 0 #000000,
    5px 0 0 0 #000000,
    0 -5px 0 0 #000000,
    0 5px 0 0 #000000,
    /* Corner pixels */
    -5px -5px 0 0 #000000,
    5px -5px 0 0 #000000,
    -5px 5px 0 0 #000000,
    5px 5px 0 0 #000000;

  /* Speech bubble tail - pixel art triangle pointing to character */
  &::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: -28px;
    width: 0;
    height: 0;
    /* Triangle pointing left */
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 22px solid #000000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 33px;
    left: -17px;
    width: 0;
    height: 0;
    /* Inner white triangle */
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-right: 16px solid #FFFFFF;
  }

  @media (max-width: 650px) {
    padding: 14px 16px;
  }
`;

export const BubbleHeader = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  color: #000080;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 3px solid #000000;
  padding-bottom: 10px;

  @media (max-width: 650px) {
    font-size: 8px;
  }
`;

export const WeatherEmoji = styled.span`
  font-size: 20px;

  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const BubbleText = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  line-height: 2;
  color: #000000;
  margin: 0;
  
  &::after {
    content: "▌";
    animation: ${cursorBlink} 0.8s step-end infinite;
    margin-left: 2px;
    color: #000000;
  }

  @media (max-width: 650px) {
    font-size: 8px;
    line-height: 1.8;
  }
`;

// ============ LOADING STATE ============

const loadingDots = keyframes`
  0%, 20% { content: "."; }
  40% { content: ".."; }
  60%, 100% { content: "..."; }
`;

export const LoadingText = styled.span`
  &::after {
    content: ".";
    animation: ${loadingDots} 1.5s steps(1) infinite;
  }
`;

// ============ WAITING STATE ============

export const WaitingMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Press Start 2P', cursive;
  font-size: 8px;
  color: #00FFFF;
  text-align: center;
  text-shadow: 0 0 10px #00FFFF;
  z-index: 3;
  
  span {
    display: block;
    margin-top: 8px;
    font-size: 6px;
    color: #888;
  }
`;
