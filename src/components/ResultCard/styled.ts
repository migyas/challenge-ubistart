import styled from 'styled-components';

const Content = styled.div`
  max-width: 36rem;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 2rem;

  @media screen and (min-width: 1250px) {
    width: calc(30% - 2rem);
    margin-right: 0;

    &:not(:nth-child(3n)) {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 1250px) {
    width: calc(50% - 2rem);
    margin-right: 0;

    &:not(:nth-child(2n)) {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 24rem;

    width: 100%;
    margin-bottom: 2rem;

    &:not(:nth-child(2n)) {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 620px) {
    max-width: 30rem;

    width: 100%;
    margin-bottom: 2rem;

    &:not(:nth-child(2n)) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 390px) {
    max-width: 23rem;

    margin-bottom: 1rem;
  }

  @media screen and (max-width: 280px) {
    max-width: 19rem;

    width: 100%;
    margin-bottom: 2rem;
  }
`;

const ThumbDrink = styled.img`
  width: 100%;
  height: 100%;
`;

const CocktailInstructions = styled.div`
  padding: 1rem;
  height: 200px;
  h2 {
    font-size: 1.4rem;
    font-weight: normal;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const CocktailIngredients = styled.div`
  padding: 1rem;
  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.2rem;
  }
`;

const CocktailIngredientsMeasure = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(50% - 1rem);
    height: 2rem;
    padding: 0.5rem 0.3rem;
    border-radius: 10px;
    font-size: 1.125rem;

    border: 1px solid #a32131;

    &:not(:nth-child(2n)) {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 850px) {
    span {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 390px) {
    flex-direction: column;
    width: 100%;
    span {
      width: 100%;
      height: 100%;
      &:not(:nth-child(2n)) {
        margin-right: 0;
      }
    }
  }
`;

const Divider = styled.div`
  max-width: 26rem;
  height: 1px;
  background: #a32131;
  margin-bottom: 1rem;
`;

export {
  Content,
  ThumbDrink,
  CocktailInstructions,
  CocktailIngredients,
  CocktailIngredientsMeasure,
  Divider,
};
