import ProjectCard from "../components/ProjectCard";
import AuctionHouseLogo from "../assets/AH-logo-dark.png";
import HolidazeLogo from "../assets/FH-logo-dark.png";
import ClicketyCartLogo from "../assets/CC-logo.png";

export default function Projects() {
  return (
    <article className="px-2 md:px-8 lg:px-28">
      <h1 className="text-3xl font-heading font-semibold mt-16 mb-8 text-center">
        All Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
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
      </div>
    </article>
  );
}
