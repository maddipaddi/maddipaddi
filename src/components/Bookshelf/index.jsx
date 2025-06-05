import HoverableShelfItem from "./HoverableShelfItem";
import ProjectCard from "../ProjectCard";
import AuctionHouseLogo from "../../assets/AH-logo-dark.png";
import HolidazeLogo from "../../assets/FH-logo-dark.png";
import ClicketyCartLogo from "../../assets/CC-logo.png";

export default function Bookshelf() {
  return (
    <div className="grid gap-y-8 p-8 mt-6 bg-primary rounded-lg  md:max-w-3xl xl:max-w-7xl border-b-6 border-bookshelf-border justify-self-center">
      {/* Shelf 1 */}
      <div className="bg-secondary grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 border-t-6 border-b-2 border-bookshelf-border">
        <img
          src="/assets/bookspines-3-ChatGPT.png"
          alt="Decorated bookspines in golden hues."
          className="h-32 object-contain translate-y-6"
        />
        <img
          src="/assets/plant-ChatGPT.png"
          alt="Hanging plant in a terracotta pot."
          className="h-32 object-contain translate-y-10 hidden md:flex"
        />

        <img
          src="/assets/bookspines-ChatGPT.png"
          alt="Decorated bookspines in earth tones."
          className="h-32 object-contain translate-y-6 hidden md:flex"
        />
        <HoverableShelfItem
          to="/about"
          imgSrc="/assets/feminine-bust-ChatGPT.png"
          alt="Feminine, cream-colored bust."
          label="About me"
          translate="translate-y-4"
        />
      </div>

      {/* Shelf 2 */}
      <div className="bg-secondary grid grid-cols-1 md:grid-cols-3 border-t-6 border-b-2 border-bookshelf-border">
        <ProjectCard
          title="ClicketyCart"
          imageSrc={ClicketyCartLogo}
          alt="Shopping cart racing over the words 'Clickety Cart'"
          description="An e-commerce prototype focused on accessibility and performance."
          to="/projects/clicketycart"
        />
        <ProjectCard
          title="Auction House"
          imageSrc={AuctionHouseLogo}
          alt="Diamond shaped logo with the words 'Auction House' to the right."
          description="An online auctions app focused on buying and selling luxury items."
          to="/projects/auctionhouse"
        />
        <ProjectCard
          title="Holidaze"
          imageSrc={HolidazeLogo}
          alt="Log cabin with a smoking pipe over the words 'Holidaze'."
          description="An airbnb-esque prototype built around hosting and renting cabins."
          to="/projects/holidaze"
        />
      </div>

      {/* Shelf 3 */}
      <div className="bg-secondary grid grid-cols-2 md:grid-cols-4 border-t-6 border-b-2 border-bookshelf-border">
        <img
          src="/assets/microscope-ChatGPT.png"
          alt="Old tomey bronze microscope."
          className="h-32 object-contain translate-y-4 hidden md:flex"
        />
        <HoverableShelfItem
          to="/resume"
          imgSrc="/assets/typewriter-ChatGPT.png"
          alt="Brown typewriter with a paper loaded."
          label="Resume"
          translate="translate-y-8"
        />
        <img
          src="/assets/lantern-ChatGPT.png"
          alt="Victorian looking gothic lantern."
          className="h-32 object-contain translate-y-3 hidden md:flex"
        />
        <HoverableShelfItem
          to="/skills"
          imgSrc="/assets/bookspines-2-ChatGPT.png"
          alt="Old looking browntoned bookspines."
          label="Skills"
          translate="translate-y-8"
        />
      </div>

      {/* Shelf 4 */}
      <div className="bg-secondary grid grid-cols-2 md:grid-cols-4 border-t-6 border-b-2 border-bookshelf-border">
        <img
          src="/assets/bookspines-4-ChatGPT.png"
          alt="Decorated long row of bookspines."
          className="h-32 object-contain translate-y-6 hidden md:flex"
        />

        <img
          src="/assets/books-n-fossil-ChatGPT.png"
          alt="Books laying down with a fossil on top."
          className="h-32 object-contain translate-y-4 hidden md:flex"
        />
        <HoverableShelfItem
          to="/contact"
          imgSrc="/assets/rotary-phone-ChatGPT.png"
          alt="Old timey dark brown rotary phone."
          label="Contact me"
          translate="translate-y-8"
        />
        <img
          src="/assets/plant-3-ChatGPT.png"
          alt="Green plant in a terracotta pot."
          className="h-32 object-contain translate-y-4"
        />
      </div>
    </div>
  );
}
