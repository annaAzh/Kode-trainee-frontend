import { FC } from 'react';
import { IconWrapper, InputWrapper, ListIcon, SearchIcon, StyledInput } from './Input.styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
  isFocused: boolean;
  onChangeFocus: (value: boolean) => void;
}

export const Input: FC<Props> = ({ value, onChangeValue, onChangeFocus }) => {
  return (
    <InputWrapper>
      <IconWrapper $left>
        <SearchIcon $isActive={value.length > 0} />
      </IconWrapper>

      <StyledInput
        placeholder="Введи имя, тег, почту..."
        onChange={(e) => onChangeValue(e.target.value)}
        onBlur={() => onChangeFocus(false)}
        onFocus={() => onChangeFocus(true)}
        value={value}
      />
      <IconWrapper $right>
        <ListIcon />
      </IconWrapper>
    </InputWrapper>
  );
};
