import React from 'react';
import {
  Content,
  ThumbDrink,
  CocktailInstructions,
  Divider,
  CocktailIngredients,
  CocktailIngredientsMeasure,
  CocktailFeatured,
} from './styled';

type ResultCardType = {
  drink: {
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
};

const ResultCard: React.FC<ResultCardType> = ({ drink }) => {
  const asArray = Object.entries(drink);
  const filtered = asArray.filter(([key, value]) => value !== null);
  const drinkObj = Object.fromEntries(filtered);

  const obj2 = {
    ...drinkObj,
    ingredients: [
      drinkObj.strIngredient1,
      drinkObj.strIngredient2,
      drinkObj.strIngredient3,
      drinkObj.strIngredient4,
      drinkObj.strIngredient5,
      drinkObj.strIngredient6,
      drinkObj.strIngredient7,
      drinkObj.strIngredient8,
      drinkObj.strIngredient9,
      drinkObj.strIngredient10,
      drinkObj.strIngredient11,
      drinkObj.strIngredient12,
      drinkObj.strIngredient13,
      drinkObj.strIngredient14,
      drinkObj.strIngredient15,
    ],
  };

  const ingredientsItems = obj2.ingredients.filter(
    ingredient => ingredient !== undefined,
  );

  return (
    <Content>
      <ThumbDrink src={drink.strDrinkThumb} alt="cocktail thumb" />
      <CocktailFeatured>
        <CocktailInstructions>
          <h2>
            <strong>{drink.strDrink}</strong> - {drink.strCategory}
          </h2>
          <Divider />
          <p>{drink.strInstructions}</p>
        </CocktailInstructions>
        <CocktailIngredients>
          <h2>Ingredients</h2>
          <Divider />
          <CocktailIngredientsMeasure>
            {ingredientsItems.map(item => (
              <span>{item}</span>
            ))}
          </CocktailIngredientsMeasure>
        </CocktailIngredients>
      </CocktailFeatured>
    </Content>
  );
};

export default ResultCard;
