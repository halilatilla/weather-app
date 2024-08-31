import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
