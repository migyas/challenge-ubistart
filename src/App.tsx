import React from 'react';
import GlobalStyles from './styles/global';

import { CocktailContextProvider } from './hooks/useCocktail';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <CocktailContextProvider>
      <Routes />
      <GlobalStyles />
    </CocktailContextProvider>
  );
};

export default App;
