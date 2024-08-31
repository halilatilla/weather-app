import styled from "styled-components";

export const WeatherCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const CityName = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const WeatherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WeatherItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.75rem;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 0.5rem;
  color: #6e8efb;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const TemperatureToggle = styled.button`
  background: none;
  border: none;
  color: #6e8efb;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.3s;
  width: 100%;
  padding: 0.5rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  font-size: 4rem;
  color: #6e8efb;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;
