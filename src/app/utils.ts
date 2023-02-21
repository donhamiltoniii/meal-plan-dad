import fs from "fs";
import matter from "gray-matter";

export const getPageContent = () => {
  const folder = "src/data/";
  const file = `${folder}home-page.mdx`;
  const fileContent = fs.readFileSync(file, "utf8");
  const matterData = matter(fileContent);

  return matterData.content;
};
