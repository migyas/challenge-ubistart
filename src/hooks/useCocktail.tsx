import React, { useState, createContext, useEffect } from 'react';

import api from '../services/api';

type PropsCocktailContext = {
  state: [];
  setState: React.Dispatch<React.SetStateAction<[]>>;
};

const DEFAULT_VALUE = {
  searchInput: '',
  drinks: [],
  setState: () => {},
};

const CocktailContext = createContext<PropsCocktailContext[] | any>(
  DEFAULT_VALUE,
);

const CocktailContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.searchInput);
  const [drinks, setDrinks] = useState(DEFAULT_VALUE.drinks);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await api.get(`search.php?s=${state}`);
        const dataDrinks = response.data.drinks;
        localStorage.setItem('drinks', JSON.stringify(dataDrinks));
        setDrinks(dataDrinks);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, [state]);

  return (
    <CocktailContext.Provider
      value={{
        state,
        setState,
        drinks,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export { CocktailContextProvider };
export default CocktailContext;
