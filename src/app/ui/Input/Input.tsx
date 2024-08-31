import { StyledInput } from "./Input.styles";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = ({ value, onChange, placeholder, onKeyPress }: InputProps) => (
  <StyledInput
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    onKeyPress={onKeyPress}
  />
);

export default Input;
