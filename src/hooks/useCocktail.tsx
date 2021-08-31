import React, { useState, createContext } from 'react';

type PropsCocktailContext = {
  state: [];
  setState: React.Dispatch<React.SetStateAction<[]>>;
};

// const DEFAULT_VALUE = {
//   state: {
//     idDrink: '',
//     strDrink: '',
//     strCategory: '',
//     strInstructions: '',
//     strDrinkThumb: '',
//   },
//   setState: () => {},
// };
const DEFAULT_VALUE = {
  state: [],
  setState: () => {},
};

const CocktailContext = createContext<PropsCocktailContext[] | any>(
  DEFAULT_VALUE,
);

const CocktailContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  localStorage.setItem('drinks', JSON.stringify(state));
  console.log(state);

  return (
    <CocktailContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export { CocktailContextProvider };
export default CocktailContext;
