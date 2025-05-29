import { Link } from "react-router";

export default function ProjectCard({ title, imageSrc, alt, description, to }) {
  return (
    <div className="w-full max-w-xs perspective p-2 mx-auto ">
      <div className="relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 bg-[#fef9f0] border-2 border-[#c0a36e] rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden px-4  bg-bookshelf-border">
          <img src={imageSrc} alt={alt} className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-heading text-background tracking-wide">
            {title}
          </h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#fef9f0] border-2 border-[#c0a36e] rounded-lg shadow-md transform rotate-y-180 flex flex-col justify-center items-center px-4 text-center backface-hidden bg-background">
          <p className="text-sm text-black mb-3 italic">{description}</p>
          <Link
            to={to}
            className="text-black underline hover:text-accent2 font-semibold"
            aria-label={`Read more about the ${title} project`}
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
