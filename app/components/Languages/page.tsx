import { client } from "../../lib/sanity";
import Image from "next/image";
import SkillBar from "../skillBar";
import skillBarPicture from "../../../public/SkillBar_Transparent.png";

interface Data {
  title: string;
  overview: string;
  skillLevel: string;
  _id: string;
  imageUrl: string;
}

async function getLangues() {
  const query = `*[_type == "language"] {
    title,
      overview,
      skillLevel,
      _id,
  }`;
  const data = await client.fetch(query);
  return data;
}

const isBold = (languageSkillLevel: string, level: string): boolean =>
  languageSkillLevel === level;

export const revalidate = 60;
export default async function Languages() {
  const data: Data[] = await getLangues();
  console.log(data);
  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-700 bg-gray-100 dark:bg-black ">
      <div className="pt-9 pb-10 md:space-y-5 dark:pt-6">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-pageTitle dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mx-14">
          Languages
        </h1>
      </div>
      <div className="pb-10">
        <div className="grid gap-y-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:gap-10 pt-10 mx-14">
          {data.map((language) => (
            <article key={language._id}>
              <div className="p-4 sm:p-6">
                <h3 className="pb-4 text-xl text-center font-semibold text-teal-500 dark:text-white">
                  {language.title}
                </h3>
                <p className="text-center mt-3 text-lg leading-relaxed text-black dark:text-gray-400 mx-auto pb-7">
                  {language.overview}
                </p>
              </div>
              <SkillBar
                boxes={[
                  { backgroundColor: "#B22222", borderColor: "#B22222" },
                  { backgroundColor: "#CC5500", borderColor: "#CC5500" },
                  { backgroundColor: "#DAA520", borderColor: "#DAA520" },
                  { backgroundColor: "#32CD32", borderColor: "#32CD32" },
                ]}
              />

              <div className="flex w-250 h-100 pt-5 pb-10">
                <p
                  className={`ml-48 mr-2 ${
                    isBold(language.skillLevel, "Fundamental")
                      ? "text-lg text-teal-500 dark:text-teal-300 font-bold"
                      : "dark:text-gray-400"
                  }`}
                >
                  Fundamental
                </p>
                <p
                  className={`ml-44 mr-2 ${
                    isBold(language.skillLevel, "Beginner")
                      ? "text-lg text-teal-500 dark:text-teal-300 font-extrabold"
                      : "dark:text-gray-400"
                  }`}
                >
                  Beginner
                </p>
                <p
                  className={`ml-44 mr-0 ${
                    isBold(language.skillLevel, "Intermediate")
                      ? "text-lg text-teal-500 dark:text-teal-300 font-extrabold"
                      : "dark:text-gray-400"
                  }`}
                >
                  Intermediate
                </p>
                <p
                  className={`ml-44 mr-0 ${
                    isBold(language.skillLevel, "Advanced")
                      ? "text-lg text-teal-500 dark:text-teal-300 font-extrabold"
                      : "dark:text-gray-400"
                  }`}
                >
                  Advanced
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
