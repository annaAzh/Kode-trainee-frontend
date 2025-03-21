import { FC } from 'react';
import { IconWrapper, InputWrapper, ListIcon, SearchIcon, StyledInput } from './Input.styles';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useAppSelector } from '@/shared/lib/hooks';
import { getCurrentFilter } from '@/entities/employee';
import { useTranslation } from 'react-i18next';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
  isFocused: boolean;
  onChangeFocus: (value: boolean) => void;
}

export const Input: FC<Props> = ({ value, onChangeValue, onChangeFocus }) => {
  const { t } = useTranslation();
  const filter = useAppSelector(getCurrentFilter);
  return (
    <InputWrapper>
      <IconWrapper $left>
        <SearchIcon $isActive={value.length > 0} />
      </IconWrapper>

      <StyledInput
        placeholder={t('search_placeholder')}
        onChange={(e) => onChangeValue(e.target.value)}
        onBlur={() => onChangeFocus(false)}
        onFocus={() => onChangeFocus(true)}
        value={value}
      />
      <IconWrapper $right>
        <ModalWindow>
          <ListIcon $isActive={filter === 'birthday'} />
        </ModalWindow>
      </IconWrapper>
    </InputWrapper>
  );
};
