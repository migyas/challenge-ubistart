import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 2rem;
  display: flex;

  @media screen and (max-width: 850px) {
    max-height: 40rem;
    height: 100%;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    max-height: 60rem;
    margin: 0 auto;
    margin: 1rem 80px;
  }

  @media screen and (max-width: 530px) {
    flex-direction: column;
    margin: 1rem 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 360px) {
    margin: 1rem 20px;
  }

  /* @media screen and (min-width: 1250px) {
    width: calc(33% - 6rem);
    margin-right: 0;
    margin-left: 2.75rem;

    &:not(:nth-child(3n)) {
      margin-right: 4rem;
    }
  } */

  /* @media screen and (max-width: 1250px) {
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
  } */
`;

const CocktailFeatured = styled.div`
  display: flex;

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;

const ThumbDrink = styled.img`
  max-width: 22rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 850px) {
    max-width: 20rem;
  }

  @media screen and (max-width: 620px) {
    max-width: 100%;
    max-height: 18rem;
    width: 100%;
  }
`;

const CocktailInstructions = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100%;
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
  width: 100%;
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
    max-height: 4rem;
    height: 100%;
    padding: 0.5rem 0.3rem;
    border-radius: 10px;
    font-size: 1.125rem;

    border: 1px solid #a32131;

    &:not(:nth-child(2n)) {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    span {
      width: 100%;

      font-size: 1rem;
      &:not(:nth-child(2n)) {
        margin-right: 0;
      }
    }
  }
  /*
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
  } */
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
  CocktailFeatured,
  Divider,
};
