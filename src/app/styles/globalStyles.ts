import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'VT323', monospace;
    background: #000080;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
  }

  /* Scanline effect overlay */
  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* CRT flicker animation */
  @keyframes flicker {
    0% { opacity: 0.97; }
    5% { opacity: 0.95; }
    10% { opacity: 0.97; }
    15% { opacity: 0.94; }
    20% { opacity: 0.98; }
    25% { opacity: 0.96; }
    30% { opacity: 0.97; }
    35% { opacity: 0.95; }
    40% { opacity: 0.98; }
    45% { opacity: 0.96; }
    50% { opacity: 0.97; }
    55% { opacity: 0.95; }
    60% { opacity: 0.98; }
    65% { opacity: 0.96; }
    70% { opacity: 0.97; }
    75% { opacity: 0.94; }
    80% { opacity: 0.98; }
    85% { opacity: 0.96; }
    90% { opacity: 0.97; }
    95% { opacity: 0.95; }
    100% { opacity: 0.98; }
  }

  /* Neon glow animation */
  @keyframes neonPulse {
    0%, 100% {
      text-shadow: 
        0 0 5px #00FF00,
        0 0 10px #00FF00,
        0 0 20px #00FF00,
        0 0 40px #00FF00;
    }
    50% {
      text-shadow: 
        0 0 2px #00FF00,
        0 0 5px #00FF00,
        0 0 10px #00FF00,
        0 0 20px #00FF00;
    }
  }

  /* Rainbow text animation */
  @keyframes rainbowShift {
    0% { color: #FF0000; }
    16% { color: #FF8000; }
    33% { color: #FFFF00; }
    50% { color: #00FF00; }
    66% { color: #00FFFF; }
    83% { color: #FF00FF; }
    100% { color: #FF0000; }
  }

  /* Blink animation for retro feel */
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  /* Selection styling */
  ::selection {
    background: #FF00FF;
    color: #000000;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #C0C0C0;
    border: 2px solid;
    border-color: #808080 #FFFFFF #FFFFFF #808080;
  }

  ::-webkit-scrollbar-thumb {
    background: #C0C0C0;
    border: 2px solid;
    border-color: #FFFFFF #808080 #808080 #FFFFFF;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #DFDFDF;
  }
`;

export default GlobalStyle;
