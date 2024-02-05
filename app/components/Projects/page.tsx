import { client } from "../../lib/sanity";
import Image from "next/image";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
  logoImageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
            title,
            overview,
            link,
            _id,
            "imageUrl": image.asset->url,
            "logoImageUrl": logoImage.asset->url
        }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;
export default async function Projects() {
  const data: Data[] = await getProjects();
  console.log(data);

  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-700 bg-gray-100 dark:bg-black">
      <div className="pt-9 pb-12 md:space-y-5 dark:pt-6">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-pageTitle dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mx-14">
          All Projects
        </h1>
      </div>
      <div className="pt-8 pb-10">
        <div className="grid gap-y-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-10 mx-14">
          {data.map((project) => (
            <article
              key={project._id}
              className="overflow-hidden pb-0 dark:border-zinc-600 rounded-lg border border-gray-200 bg-white dark:bg-black shadow-lg dark:shadow-gray-700 shadow-teal-400 relative" // Ensure this is relative
            >
              <div className="h-80 w-full relative">
                <Image
                  fill
                  src={project.imageUrl}
                  alt="image of the project"
                  className="h-full w-full rounded object-cover"
                />
              </div>
              <div
                className="pt-10 pb-2 px-4 bg-white dark:bg-transparent relative flex flex-col justify-between"
                style={{ minHeight: "200px" }}
              >
                {" "}
                {/* Adjust minimum height as needed */}
                <a href={project.link} target="_blank">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </a>
                <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.overview}
                </p>
                {/* Adjust the positioning of this div as needed */}
                <div className="mt-4 self-start">
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 font-medium text-teal-500"
                  >
                    Learn More!
                    <span className="block transition-all group-hover:ms-0.5">
                      &rarr;
                    </span>
                    <div className="pl-56 bg-transparent rounded-full relative absolute inset-0 bg-transparent dark:bg-black dark:opacity-85">
                      {" "}
                      <img
                        src={project.logoImageUrl}
                        alt="Descriptive Alt Text"
                        className="h-10 w-10 rounded-full" // Adjust size as needed, rounded-full makes the image circular
                      />
                    </div>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
