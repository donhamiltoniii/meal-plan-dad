export type MealPlan = {
  title: string;
  meals: string;
  content: string;
};

export type Recipe = {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  description: string;
  content: string;
};

export type SiteLink = { title: string; slug: string };
