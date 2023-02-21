import { RecipeList } from "@/components/recipe-list";
import Markdown from "markdown-to-jsx";
import { getPageContent } from "./utils";

import "./page.module.scss";

export default async function Home() {
  return (
    <main>
      <section>
        <h2>Recipes</h2>
        <RecipeList />
      </section>
      <Markdown>{getPageContent()}</Markdown>
    </main>
  );
}
