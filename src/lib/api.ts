import { markdownToHtml } from "@/lib/markdown-to-html";
import { Recipe } from "@/types";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const recipesDirectory: string = join(process.cwd(), "src", "data", "recipes");

export function getAllRecipes(): Promise<Recipe>[] {
  const slugs = getRecipeSlugs();
  const recipes = slugs.map((slug) => getRecipeBySlug(slug));
  return recipes;
}

export async function getRecipeBySlug(slug: string): Promise<Recipe> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(recipesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);

  content = await markdownToHtml(content);

  return {
    ...data,
    content,
  } as Recipe;
}

export function getRecipeSlugs(): string[] {
  return fs.readdirSync(recipesDirectory);
}
