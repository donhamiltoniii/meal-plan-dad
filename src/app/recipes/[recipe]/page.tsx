import { markdownToHtml } from "@/lib/markdown-to-html";
import { getRecipeBySlug } from "@/lib/api";
import { Recipe } from "@/types";

import css from "./styles.module.scss";
import { RecipeCard } from "@/components/recipe";

const getRecipe = async (recipeId: string): Promise<Recipe> => {
  const recipe = await getRecipeBySlug(recipeId);
  return recipe;
};

export default async function RecipePage({
  params,
}: {
  params: { recipe: string };
}) {
  const { recipe: recipeToGet } = params;

  const recipe: Recipe = await getRecipe(recipeToGet);

  console.log({ recipe });

  return (
    <main className={css["recipe-page"]}>
      <RecipeCard recipe={recipe} />
    </main>
  );
}
