import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

import { getMealPlanLinks } from "@/lib/get-meal-plan-links";
import { MealPlan, SiteLink } from "@/types";
import css from "./styles.module.scss";

const getMealPlanContent = (slug: string): MealPlan => {
  const folder = "src/data/meal-plans/";
  const file = `${folder}${slug}.mdx`;
  const fileContent = fs.readFileSync(file, "utf8");
  const matterData = matter(fileContent);
  const { title, meals } = matterData.data;

  return {
    title,
    meals,
    content: matterData.content,
  };
};

export const generateStaticParams = async () => {
  return getMealPlanLinks().map((recipeLink: SiteLink) => ({
    slug: recipeLink.slug,
  }));
};

export default async function MealPlanPage({
  params,
}: {
  params: { slug: string };
}) {
  const { title, meals, content }: MealPlan = getMealPlanContent(params.slug);

  return (
    <main className={css["recipe-page"]}>
      <h2>{title}</h2>
      <small>Meals: {meals}</small>
      <Markdown>{content}</Markdown>
    </main>
  );
}
