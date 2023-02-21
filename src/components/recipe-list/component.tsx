import { getRecipeLinks } from "@/lib/get-recipe-links";
import { RecipeLink } from "@/types";
import Link from "next/link";

export const RecipeList = () => {
  const recipeListItems: React.ReactNode[] = getRecipeLinks().map(
    (recipeLink: RecipeLink) => (
      <li key={recipeLink.slug}>
        <Link href={`/recipes/${recipeLink.slug}`}>{recipeLink.title}</Link>
      </li>
    )
  );

  return (
    <nav>
      <ul>{recipeListItems}</ul>
    </nav>
  );
};
