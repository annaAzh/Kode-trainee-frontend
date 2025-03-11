import { FC, useState } from 'react';
import { RouteProvider, StoreProvider, Theme } from './providers';
import { GlobalStyle } from './styles/GlobalStyle';
import { THEME } from '@/shared/types';

const App: FC = () => {
  const [theme] = useState(THEME.LIGHT);
  return (
    <StoreProvider>
      <Theme theme={theme}>
        <GlobalStyle />
        <RouteProvider />
      </Theme>
    </StoreProvider>
  );
};

export { App };
