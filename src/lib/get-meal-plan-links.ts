import { SiteLink } from "@/types";
import matter from "gray-matter";
import fs from "fs";

export const getMealPlanLinks = (): SiteLink[] => {
  const folder = "src/data/meal-plans/";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file: string) => file.endsWith(".mdx"));

  const recipes = markdownFiles.map((fileName: string) => {
    const fileContents = fs.readFileSync(
      `src/data/meal-plans/${fileName}`,
      "utf8"
    );
    const matterData = matter(fileContents);
    const { title } = matterData.data;

    return {
      title,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return recipes;
};
