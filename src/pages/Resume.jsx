import {
  BrushCleaning,
  GraduationCap,
  Laptop,
  Sprout,
  Earth,
  Hospital,
} from "lucide-react";

export default function Resume() {
  return (
    <article>
      <h1 className="text-3xl font-heading font-semibold mt-16 mb-8 text-center">
        Resume
      </h1>
      <div className="flex flex-wrap justify-center mb-8 gap-8 items-center">
        <div className="px-4">
          <div className="flex flex-col bg-background text-copy p-8 md:max-w-xl">
            <p className="mb-4 text-lg font-medium">
              Download my resume or take a look below for a quick overview.
            </p>
            <div className="justify-center flex gap-4 flex-wrap">
              <a
                href="/assets/CV_norsk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-accent text-white px-4 py-2 rounded shadow-lg cursor-pointer hover:bg-primary font-medium active:scale-95"
              >
                View resume (NO)
              </a>
              <a
                href="/assets/CV_English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 py-2 rounded shadow-lg cursor-pointer hover:bg-primary font-medium active:scale-95"
              >
                View resume (EN)
              </a>
            </div>
          </div>
        </div>
        <div className="md:min-w-xl px-4">
          <img
            src="/assets/typewriter-ChatGPT.png"
            alt="Brown typewriter with a paper loaded."
            className="w-70 translate-y-20 drop-shadow-[2px_4px_2px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
      <div className="bg-primary h-16 border-b-4 border-bookshelf-border"></div>
      <div className="flex flex-wrap justify-center mb-8 gap-8 items-center px-4">
        <div className="self-stretch bg-background text-copy p-8 mt-8 md:max-w-xl">
          <h2 className="mb-2 font-medium">Education:</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <Laptop className="flex-shrink-0" /> Higher professional degree in
              front-end development (2023-2025)
            </li>
            <li className="flex gap-2 p-2">
              <GraduationCap className="flex-shrink-0" /> Bachelor in nursing
              (2018-2021)
            </li>
            <li className="flex gap-2 p-2">
              <GraduationCap className="flex-shrink-0" /> Bachelor in English
              Language and Communication with Spanish (2015-2018)
            </li>
          </ul>
        </div>
        <div className="bg-background text-copy p-8 mt-8 md:max-w-xl">
          <h2 className="mb-2 font-medium">Previous work:</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <Sprout className="flex-shrink-0" /> Sales associate at Plantasjen
              (2023-2024)
            </li>
            <li className="flex gap-2 p-2">
              <Earth className="flex-shrink-0" /> Translator at Zoo Digital
              Community (2022-2023)
            </li>
            <li className="flex gap-2 p-2">
              <BrushCleaning className="flex-shrink-0" /> Cleaning personell at
              ISS Facility Services AS (2021-2022)
            </li>
            <li className="flex gap-2 p-2">
              <Hospital className="flex-shrink-0" /> Nursing assistant at
              Lillehammer Hospital (2020-2021)
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
