import {
  Bike,
  BookCopy,
  CircleSmall,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  Laptop,
  Mountain,
  Popcorn,
  Shirt,
  TentTree,
  WavesLadder,
} from "lucide-react";

export default function About() {
  return (
    <article>
      <div className="flex flex-wrap justify-center mb-8 gap-8 items-center">
        <div className="px-4">
          <h1 className="text-3xl font-heading font-semibold mt-16 mb-8 text-center">
            About me
          </h1>
          <ul className="flex flex-wrap gap-2 bg-background text-black p-8 md:max-w-xl">
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> My name is Madelen
              (Maddie) Sletteberg
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> 28 years old
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Fun
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Professional
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Detail-oriented
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Adventurous
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Communicative,
              diplomatic, and team player
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Thrive on creativity and
              problem-solving
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Find great satisfaction
              in how code can bring order to chaos
            </li>
          </ul>
        </div>
        <div className="md:min-w-lg px-4">
          <img
            src="/assets/feminine-bust-ChatGPT.png"
            alt="Feminine, cream-colored bust."
            className="w-70 translate-y-16 lg:translate-y-20"
          />
        </div>
      </div>
      <div className="bg-primary h-16 border-b-4 border-bookshelf-border"></div>
      <div className="flex flex-wrap justify-center mb-8 gap-8 items-center px-4">
        <div className="bg-background text-black p-8 mt-8 lg:max-w-xl xl:max-w-lg">
          <h2 className="mb-2 font-medium">Education:</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <GraduationCap /> A bachelor degree in linguistics
            </li>
            <li className="flex gap-2 p-2">
              <GraduationCap /> A bachelor degree in nursing
            </li>
            <li className="flex gap-2 p-2">
              <Laptop /> A two-year front-end development degree
            </li>
          </ul>
        </div>
        <div className="bg-background text-black p-8 mt-8 lg:max-w-xl xl:max-w-xl">
          <h2 className="mb-2 font-medium">When I'm not coding, I'm...</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <Shirt /> sewing
            </li>
            <li className="flex gap-2 p-2">
              <Mountain /> climbing
            </li>
            <li className="flex gap-2 p-2">
              <Dumbbell /> exercising
            </li>
            <li className="flex gap-2 p-2">
              <BookCopy /> reading
            </li>
            <li className="flex gap-2 p-2">
              <Bike /> mountain-biking
            </li>
            <li className="flex gap-2 p-2">
              <TentTree /> camping
            </li>
            <li className="flex gap-2 p-2">
              <Gamepad2 /> gaming
            </li>
            <li className="flex gap-2 p-2">
              <WavesLadder /> swimming
            </li>
            <li className="flex gap-2 p-2">
              <Popcorn /> binge-watching
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
