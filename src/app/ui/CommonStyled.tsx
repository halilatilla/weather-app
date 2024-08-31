import getBackgroundColor from "@/lib/getBackgroundColor";
import styled from "styled-components";

export const DynamicBackground = styled.div<{ weatherCondition: string }>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ weatherCondition }) => getBackgroundColor(weatherCondition)};
  transition: background 0.5s ease-in-out;
`;

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 90%;
  max-width: 600px;
  margin: 1rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
