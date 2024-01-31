import Image from "next/image";
import me from "@/public/LinkedInProfilePic.jpeg";

export default function Home() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-4 dark:mt-0 mb-20">
      <div className="space-y-2 pt-6 pb-8 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Home
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-8-x xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of Timothy Dube"
            src={me}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Timothy Dube
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center mt-2">
            Hey my name is Tim and I&apos;m a developer
          </p>

          {/* GitHub Icon */}
          <div className="flex space-x-5 pt-4">
            <a href="https://github.com/timdube1234" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/tim-dube-3082a4243/"
              target="_blank"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            {/* Gmail Icon */}
            <a href="mailto:timdube0@gmail.com" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>
            {/*idk Link */}
            <a href="" target="_blank">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            Hello! I'm Tim Dube, a dedicated{" "}
            <span className="font-bold text-teal-400 dark:text-blue-500">
              Junior year Computer Science student
            </span>{" "}
            at the University of Oswego.
          </p>
          <p>
            With a passion for programming that has driven me for over{" "}
            <span className="font-bold text-teal-400 dark:text-blue-500">
              6 years
            </span>
            , I've developed a strong foundation in programming and a deep
            understanding of various programming languages, including{" "}
            <span className="font-bold text-teal-400 dark:text-blue-500">
              Python, Java, and C.
            </span>{" "}
            My journey in computer science is marked by a constant eagerness to
            learn and a commitment to enhancing my skills through robust coding
            projects.
          </p>
          <p>
            I am still exploring the vast field of computer science but I find
            myself particularly drawn to the realms of
            <span className="font-bold text-teal-400 dark:text-blue-500">
              {" "}
              Data Science and artificial intelligence
            </span>
            . These areas fascinate me, and I aspire to specialize in them in
            the future. When it comes to problem-solving and tackling new
            challenges, I approach them with a blend of analytical thinking and
            creativity. This approach has not only helped me in successfully
            navigating through complex programming tasks but also in
            contributing effectively to team projects and collaborative school
            assignments.
          </p>
        </div>
      </div>
    </div>
  );
}
