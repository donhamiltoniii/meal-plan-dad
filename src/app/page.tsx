import { pageData } from "@/data/home-page";
import { getRecipeLinks } from "@/lib/get-recipe-links";
import { RecipeLink } from "@/types";
import Link from "next/link";

export default async function Home() {
  const { sectionOne, sectionTwo, sectionThree } = pageData;

  const recipeListItems: React.ReactNode[] = getRecipeLinks().map(
    (recipeLink: RecipeLink) => (
      <li key={recipeLink.slug}>
        <Link href={`/recipes/${recipeLink.slug}`}>{recipeLink.title}</Link>
      </li>
    )
  );

  return (
    <main>
      <section>
        <h2>{sectionOne.title}</h2>
        <ul>
          {sectionOne.list.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{sectionTwo.title}</h2>
        <ol>
          {sectionTwo.list.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
      <section>
        <h2>{sectionThree.title}</h2>

        <p>{sectionThree.description}</p>

        {sectionThree.lists.map(
          (topList: {
            title: string;
            foodLists: {
              title: string;
              list: string[];
            }[];
          }) => (
            <section key={topList.title}>
              <h3>{topList.title}</h3>

              {topList.foodLists.map(
                (list: { title: string; list: string[] }) => (
                  <ul key={list.title}>
                    <h4>{list.title}</h4>
                    {list.list.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </section>
          )
        )}
      </section>
      <section>
        <h2>Recipes</h2>
        <nav>
          <ul>{recipeListItems}</ul>
        </nav>
      </section>
    </main>
  );
}
