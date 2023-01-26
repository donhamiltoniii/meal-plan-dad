import { pageData } from "@/data/home-page";

export default function Home() {
  const { sectionOne, sectionTwo, sectionThree } = pageData;

  return (
    <main>
      <section>
        <h2>{sectionOne.title}</h2>
        <ul>
          {sectionOne.list.map((item: string) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{sectionTwo.title}</h2>
        <ol>
          {sectionTwo.list.map((item: string) => (
            <li key={Math.random()}>{item}</li>
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
            <section key={Math.random()}>
              <h3>{topList.title}</h3>

              {topList.foodLists.map(
                (list: { title: string; list: string[] }) => (
                  <ul key={Math.random()}>
                    <h4>{list.title}</h4>
                    {list.list.map((item: string) => (
                      <li key={Math.random()}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </section>
          )
        )}
      </section>
    </main>
  );
}
