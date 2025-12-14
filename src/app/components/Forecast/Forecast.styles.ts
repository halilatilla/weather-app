import styled, { keyframes } from "styled-components";

const diskInsert = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const ForecastContainer = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const ForecastTitle = styled.h3`
  font-family: "Press Start 2P", cursive;
  font-size: 14px;
  color: #00ffff;
  text-shadow: 2px 2px 0 #000, 0 0 10px #00ffff;
  margin-bottom: 16px;
  text-align: center;

  &::before {
    content: "📁 ";
  }

  &::after {
    content: " 📁";
  }

  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

export const ForecastGrid = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 10px 5px;
  scroll-snap-type: x mandatory;

  /* Retro scrollbar */
  &::-webkit-scrollbar {
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #c0c0c0;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;

    &:hover {
      background: #a0a0a0;
    }
  }
`;

export const FloppyDisk = styled.div<{ $delay: number }>`
  min-width: 120px;
  height: 140px;
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  border: 3px solid #444;
  border-radius: 4px 4px 8px 8px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: ${diskInsert} 0.4s ease-out;
  animation-delay: ${({ $delay }) => $delay * 0.1}s;
  animation-fill-mode: backwards;
  scroll-snap-align: start;

  /* Metal slider */
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 35px;
    background: linear-gradient(180deg, #888 0%, #666 50%, #888 100%);
    border: 2px solid #555;
    border-radius: 2px;
  }

  /* Label area */
  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 50px;
    background: #f5f5dc;
    border: 1px solid #ccc;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 255, 255, 0.3);
  }

  @media (max-width: 650px) {
    min-width: 100px;
    height: 120px;

    &::before {
      height: 28px;
    }

    &::after {
      height: 40px;
    }
  }
`;

export const DiskLabel = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 76%;
  height: 44px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  @media (max-width: 650px) {
    bottom: 12px;
    height: 36px;
  }
`;

export const DayName = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 7px;
  color: #333;
  text-transform: uppercase;

  @media (max-width: 650px) {
    font-size: 6px;
  }
`;

export const DiskTemp = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  color: #000;
  font-weight: bold;

  @media (max-width: 650px) {
    font-size: 8px;
  }
`;

export const DiskIcon = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  z-index: 1;

  @media (max-width: 650px) {
    top: 42px;
    font-size: 20px;
  }
`;

export const DiskHole = styled.div`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #111;
  border-radius: 50%;
  border: 2px solid #333;
  z-index: 2;

  /* Inner circle */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #222;
    border-radius: 50%;
  }

  @media (max-width: 650px) {
    width: 16px;
    height: 16px;
    top: 14px;

    &::after {
      width: 6px;
      height: 6px;
    }
  }
`;

export const LoadingDisk = styled(FloppyDisk)`
  &::after {
    background: linear-gradient(90deg, #f5f5dc 0%, #e0e0c0 50%, #f5f5dc 100%);
    background-size: 200px 100%;
    animation: ${shimmer} 1.5s infinite;
  }
`;

export const WeatherCondition = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 5px;
  color: #666;
  text-transform: uppercase;
  max-width: 100%;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 650px) {
    font-size: 4px;
  }
`;

// ============ DETAIL POPUP ============

const popupAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DetailOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const DetailPopup = styled.div`
  background: #c0c0c0;
  border: 3px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #404040,
    8px 8px 0 rgba(0, 0, 0, 0.3);
  max-width: 320px;
  width: 100%;
  animation: ${popupAppear} 0.2s ease-out;
`;

export const DetailTitleBar = styled.div`
  background: linear-gradient(90deg, #000080, #1084d0);
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailTitle = styled.span`
  color: #ffffff;
  font-family: "Press Start 2P", cursive;
  font-size: 8px;
  text-shadow: 1px 1px 0 #000000;
`;

export const DetailCloseButton = styled.button`
  width: 16px;
  height: 14px;
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  font-family: "Press Start 2P", cursive;
  font-size: 8px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:active {
    border-color: #808080 #ffffff #ffffff #808080;
  }
`;

export const DetailContent = styled.div`
  padding: 16px;
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #808080;
`;

export const DetailEmoji = styled.span`
  font-size: 40px;
  filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.3));
`;

export const DetailHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailDate = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  color: #000080;
`;

export const DetailDescription = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 7px;
  color: #666;
  text-transform: uppercase;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const DetailItem = styled.div`
  background: #ffffff;
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const DetailLabel = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 6px;
  color: #808080;
  text-transform: uppercase;
`;

export const DetailValue = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  color: #000000;
`;
