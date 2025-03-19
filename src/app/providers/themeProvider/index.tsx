import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/app/styles/theme/theme';
import { THEME } from '@/shared/types';
import { useAppSelector } from '@/shared/lib/hooks';
import { getTheme } from '@/entities/theme';

interface Props {
  children: React.ReactNode;
}

export const Theme: FC<Props> = ({ children }) => {
  const theme = useAppSelector(getTheme);
  return <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>{children}</ThemeProvider>;
};
