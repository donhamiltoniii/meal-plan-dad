import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import css from "./styles.module.scss";
import { Recipe, RecipeLink } from "@/types";
import { getRecipeLinks } from "@/lib/get-recipe-links";

const getRecipeContent = (slug: string): Recipe => {
  const folder = "src/data/recipes/";
  const file = `${folder}${slug}.mdx`;
  const fileContent = fs.readFileSync(file, "utf8");
  const matterData = matter(fileContent);
  const { title, prepTime, cookTime, servings, description } = matterData.data;

  return {
    title,
    prepTime,
    cookTime,
    servings,
    description,
    content: matterData.content,
  };
};

export const generateStaticParams = async () => {
  return getRecipeLinks().map((recipeLink: RecipeLink) => ({
    slug: recipeLink.slug,
  }));
};

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const { title, prepTime, cookTime, servings, description, content }: Recipe =
    getRecipeContent(params.slug);

  return (
    <main className={css["recipe-page"]}>
      <h2>{title}</h2>
      <ul>
        <li>
          <strong>Prep Time:</strong> {prepTime}
        </li>
        <li>
          <strong>Cook Time:</strong> {cookTime}
        </li>
        <li>
          <strong>Servings:</strong> {servings}
        </li>
      </ul>
      <blockquote>{description}</blockquote>
      <Markdown>{content}</Markdown>
    </main>
  );
}
