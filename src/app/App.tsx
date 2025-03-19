import { FC } from 'react';
import { RouteProvider, StoreProvider, Theme } from './providers';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from '@/widget/Header/Header';
import { InitTheme } from './providers/themeProvider/InitTheme';

const App: FC = () => {
  return (
    <StoreProvider>
      <Theme>
        <GlobalStyle />
        <InitTheme />
        <Header />
        <RouteProvider />
      </Theme>
    </StoreProvider>
  );
};

export { App };
