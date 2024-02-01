import { client } from "../../lib/sanity";
import Image from "next/image";
import SkillBar from "../skillBar";
import skillBarPicture from "../../../public/SkillBar_Transparent.png";

interface Data {
  title: string;
  overview: string;
  skillLevel: string;
  numYears: number;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getLangues() {
  const query = `*[_type == "language"] {
    title,
      overview,
      skillLevel,
      numYears,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

const isBold = (languageSkillLevel: string, level: string): boolean =>
  languageSkillLevel === level;

export const revalidate = 60;
export default async function Languages() {
  let data: Data[] = await getLangues();

  data = data.sort((a, b) => b.numYears - a.numYears);

  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-700 bg-gray-100 dark:bg-black ">
      <div className="pt-9 pb-12 md:space-y-5 dark:pt-6">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-pageTitle dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mx-14">
          Languages
        </h1>
      </div>
      <div className="pt-8 pb-10">
        <div className="grid gap-y-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-10 mx-14">
          {data.map((language) => (
            <article
              key={language._id}
              className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-200 bg-white dark:bg-black  shadow-xl dark:shadow-gray-700 shadow-teal-400"
            >
              <div>
                <h1 className="pt-12 bg-white dark:bg-transparent" />
              </div>
              <div className="h-60 w-full relative">
                <Image
                  fill
                  src={language.imageUrl}
                  alt="image of the Language"
                  className="h-full w-full rounded object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-transparent">
                <a href={language.link} target="_blank">
                  <h3 className="text-lg font-meduim text-gray-900 dark:text-white mb-4">
                    {language.title}
                  </h3>
                </a>
                <p className="line-clamp-4 mb-0 dark:mb-2 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {language.overview}
                </p>
                <a
                  href={language.link}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 font-medium text-teal-500 dark:text-teal-300"
                >
                  <span className="block transition-all group-hover:ms-0.5">
                    {language.numYears} Year +
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
