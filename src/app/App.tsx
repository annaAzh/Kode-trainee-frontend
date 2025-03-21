import { FC } from 'react';
import { RouteProvider, StoreProvider, Theme } from './providers';
import { GlobalStyle } from './styles/GlobalStyle';
import { InitTheme } from './providers/themeProvider/InitTheme';
import { ErrorBoundary } from './providers/ErrorBoundary/ErrorBoundary';
import './i18next';

const App: FC = () => {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <Theme>
          <GlobalStyle />
          <InitTheme />
          <RouteProvider />
        </Theme>
      </ErrorBoundary>
    </StoreProvider>
  );
};

export { App };
