export type Recipe = {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  description: string;
  content: string;
};

export type RecipeLink = { title: string; slug: string };
