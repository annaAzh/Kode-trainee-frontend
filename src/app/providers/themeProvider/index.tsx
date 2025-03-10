import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/app/styles/GlobalStyle';
import { darkTheme, lightTheme } from '@/app/styles/theme/theme';
import { THEME } from '@/shared/types';

interface Props {
  children: React.ReactNode;
  theme: THEME;
}

export const Theme: FC<Props> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
