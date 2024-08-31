import { StyledCard } from "./Card.styles";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => <StyledCard>{children}</StyledCard>;

export default Card;
