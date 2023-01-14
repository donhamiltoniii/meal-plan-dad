import { markdownToHtml } from "@/lib/markdown-to-html";
import { Recipe } from "@/types";

type Props = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: Props) => {
  const { title, prepTime, cookTime, servings, description, content } = recipe;

  return (
    <section>
      <h2>{title}</h2>
      <dl>
        <dt>Prep Time</dt>
        <dd>{prepTime}</dd>
        <dt>Cook Time</dt>
        <dd>{cookTime}</dd>
        <dt>Servings</dt>
        <dd>{servings}</dd>
      </dl>
      <blockquote>{description}</blockquote>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </section>
  );
};
