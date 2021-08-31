import React, { useContext, useState, useEffect } from 'react';
import {
  Container,
  Content,
  Logo,
  InputContainer,
  Featured,
  Divider,
  FeaturedList,
} from './styled';

import mainLogo from '../../assets/main_logo.svg';
import imgSearch from '../../assets/search.svg';
import ResultCard from '../../components/ResultCard';
import CocktailContext from '../../hooks/useCocktail';
import api from '../../services/api';

type CocktailTypes = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  ingredients: [
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
  ];
};

const SearchCocktail: React.FC = () => {
  const { state, setState } = useContext(CocktailContext);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState<CocktailTypes[]>([]);

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);
      const target = e.target as typeof e.target & {
        search: { value: string };
      };
      const searchFieldValue = target.search.value;
      setSearchField(searchFieldValue);
      const response = await api.get(`search.php?s=${searchFieldValue}`);
      setDrinks(response.data.drinks);
      setState(response.data.drinks);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [searchField, drinks, loading]);

  console.log(drinks);

  return (
    <>
      <Container>
        <Content>
          <header>
            <Logo src={mainLogo} alt="main logo" />
            <h1>Search Cocktail</h1>
          </header>
          <Featured>
            <InputContainer
              onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
            >
              <img src={imgSearch} alt="search icon" />
              <input
                type="text"
                name="search"
                placeholder="Search for the name of the cocktail"
              />
            </InputContainer>
            {drinks?.length > 0 ? (
              <>
                <span>
                  <strong>{drinks.length}</strong> Results Found
                </span>
                <Divider />
              </>
            ) : (
              ''
            )}

            {!drinks && (
              <>
                <span>
                  The name of cocktail is incorrect, please check and try again
                </span>
                <Divider />
              </>
            )}

            <FeaturedList>
              {drinks?.length > 0 && !loading && (
                <>
                  {drinks.map(drink => (
                    <ResultCard key={drink.idDrink} drink={drink} />
                  ))}
                </>
              )}
              {loading && <div>Loading...</div>}
            </FeaturedList>
          </Featured>
        </Content>
      </Container>
    </>
  );
};

export default SearchCocktail;
