import React from 'react';
import {
  Container,
  Content,
  Logo,
  InputContainer,
  Featured,
  Divider,
} from './styled';

import mainLogo from '../../assets/main_logo.svg';
import ResultCard from '../../components/ResultCard';

const SearchCocktail: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(e.target.search.value);
  };

  return (
    <>
      <Container>
        <Content>
          <header>
            <Logo src={mainLogo} alt="main logo" />
            <h1>Search Cocktail</h1>
          </header>
          <Featured>
            <InputContainer onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Search for the name of the cocktail"
              />
            </InputContainer>
            <span>
              <strong>8</strong> Results Found
            </span>
            <Divider />
            <ResultCard />
          </Featured>
        </Content>
      </Container>
    </>
  );
};

export default SearchCocktail;
