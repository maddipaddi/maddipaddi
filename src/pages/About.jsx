import {
  Bike,
  BookCopy,
  CircleSmall,
  Dumbbell,
  Gamepad2,
  Luggage,
  Mountain,
  NotebookPen,
  PartyPopper,
  Popcorn,
  Shirt,
  TentTree,
  WandSparkles,
  WavesLadder,
} from "lucide-react";

export default function About() {
  return (
    <article>
      <h1 className="text-3xl font-heading font-semibold mt-16 mb-8 text-center">
        About me
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4 items-center">
        <div className=" bg-background text-copy p-8 md:max-w-xl">
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> My name is Madelen
              Sletteberg
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> 29 years old - young
              ish, neck injuries now come from sleeping wrong rather than
              headbanging
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Fun(ny) - most of my
              friends agree with this
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Detail-oriented - which
              I hope you can tell from this portfolio
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Adventurous - check out
              my hobbies
            </li>
          </ul>
        </div>
        <div className="p-8 pt-1 md:min-w-xl">
          <img
            src="/assets/feminine-bust-ChatGPT.png"
            alt="Feminine, cream-colored bust."
            className="w-70 translate-y-16 lg:translate-y-20 drop-shadow-[2px_4px_2px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
      <div className="bg-primary h-16 border-b-4 border-bookshelf-border"></div>
      <div className="flex flex-wrap justify-center items-stretch mb-8 gap-8 px-4">
        <div className="bg-background text-copy p-8 mt-8 md:max-w-xl">
          <h2 className="mb-2 font-medium">Professionally, I'm...</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Communicative,
              diplomatic, and a team player (several of my projects have been
              successful collaborations with classmates)
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Thriving on creativity
              and problem-solving (anyone who's worked with CSS can attest to
              the need to enjoy frustration to work in frontend)
            </li>
            <li className="flex gap-2 p-2">
              <CircleSmall className="flex-shrink-0" /> Bringing order to chaos
              with code (I'm the one on the team who installs prettier, sets up
              pre-commit hooks and makes everyone follow commit guidelines)
            </li>
          </ul>
        </div>
        <div className="bg-background text-copy p-8 mt-8 md:max-w-xl">
          <h2 className="mb-2 font-medium">When I'm not coding, I'm...</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-2 p-2">
              <Shirt className="flex-shrink-0" /> sewing
            </li>
            <li className="flex gap-2 p-2">
              <Mountain className="flex-shrink-0" /> climbing
            </li>
            <li className="flex gap-2 p-2">
              <Dumbbell className="flex-shrink-0" /> exercising
            </li>
            <li className="flex gap-2 p-2">
              <BookCopy className="flex-shrink-0" /> reading
            </li>
            <li className="flex gap-2 p-2">
              <Bike className="flex-shrink-0" /> mountain-biking
            </li>
            <li className="flex gap-2 p-2">
              <TentTree className="flex-shrink-0" /> camping
            </li>
            <li className="flex gap-2 p-2">
              <Gamepad2 className="flex-shrink-0" /> gaming
            </li>
            <li className="flex gap-2 p-2">
              <WavesLadder className="flex-shrink-0" /> swimming
            </li>
            <li className="flex gap-2 p-2">
              <Popcorn className="flex-shrink-0" /> binge-watching
            </li>
            <li className="flex gap-2 p-2">
              <Luggage className="flex-shrink-0" /> traveling
            </li>
            <li className="flex gap-2 p-2">
              <WandSparkles className="flex-shrink-0" /> playing DnD
            </li>
            <li className="flex gap-2 p-2">
              <NotebookPen className="flex-shrink-0" /> writing
            </li>
            <li className="flex gap-2 p-2">
              <PartyPopper className="flex-shrink-0" /> socializing with friends
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
