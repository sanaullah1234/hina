import { Recipe } from "../types/recipe";

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes;
};
