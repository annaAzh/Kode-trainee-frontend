import { Switch } from '@/shared/ui';
import { FC } from 'react';
import { StyledHeader, StyledWrapper } from './Header.styles';
import { useTheme } from '@/shared/lib/hooks';
import { THEME } from '@/shared/types';

export const Header: FC = () => {
  const { theme, setNewTheme } = useTheme();

  const handleToggleTheme = () => {
    setNewTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  return (
    <StyledHeader>
      <StyledWrapper>
        <Switch onChange={handleToggleTheme} toggled={theme === THEME.DARK ? true : false} id="theme_toggle" />
      </StyledWrapper>
    </StyledHeader>
  );
};
