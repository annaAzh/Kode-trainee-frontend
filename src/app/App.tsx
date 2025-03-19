import { FC } from 'react';
import { RouteProvider, StoreProvider, Theme } from './providers';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from '@/widget/Header/Header';
import { InitTheme } from './providers/themeProvider/InitTheme';
import { ErrorBoundary } from './providers/ErrorBoundary/ErrorBoundary';

const App: FC = () => {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <Theme>
          <GlobalStyle />
          <InitTheme />
          <Header />
          <RouteProvider />
        </Theme>
      </ErrorBoundary>
    </StoreProvider>
  );
};

export { App };
