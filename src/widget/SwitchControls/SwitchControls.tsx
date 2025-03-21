import { Switch } from '@/shared/ui';
import { FC } from 'react';
import { useTheme } from '@/shared/lib/hooks';
import { THEME } from '@/shared/types';
import { LocaleSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { StyledControls } from './SwitchControls.styles';

interface Props {
  notOnLine?: boolean;
}

export const SwitchControls: FC<Props> = ({ notOnLine }) => {
  const { theme, setNewTheme } = useTheme();

  const handleToggleTheme = () => {
    setNewTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  return (
    <StyledControls>
      <Switch
        notOnLine={notOnLine}
        onChange={handleToggleTheme}
        toggled={theme === THEME.DARK ? true : false}
        id="theme_toggle"
      />
      <LocaleSwitcher notOnLine={notOnLine} />
    </StyledControls>
  );
};
