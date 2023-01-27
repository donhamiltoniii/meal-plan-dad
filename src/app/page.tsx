import { getRecipeLinks } from "@/lib/get-recipe-links";
import { RecipeLink } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default async function Home() {
  const getPageContent = () => {
    const folder = "src/data/";
    const file = `${folder}home-page.mdx`;
    const fileContent = fs.readFileSync(file, "utf8");
    const matterData = matter(fileContent);

    return matterData.content;
  };

  const recipeListItems: React.ReactNode[] = getRecipeLinks().map(
    (recipeLink: RecipeLink) => (
      <li key={recipeLink.slug}>
        <Link href={`/recipes/${recipeLink.slug}`}>{recipeLink.title}</Link>
      </li>
    )
  );

  return (
    <main>
      <Markdown>{getPageContent()}</Markdown>
      <section>
        <h2>Recipes</h2>
        <nav>
          <ul>{recipeListItems}</ul>
        </nav>
      </section>
    </main>
  );
}
