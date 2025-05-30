import { Link } from "react-router";

export default function ProjectCard({ title, imageSrc, alt, description, to }) {
  return (
    <div className="w-full max-w-xs perspective p-2 mx-auto ">
      <div className="relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
        {/* Front Side */}
        <div className=" absolute inset-0 bg-[#fef9f0] border-2 border-[#c0a36e] rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden px-4  bg-bookshelf-border max">
          <div className="max-h-32">
            <img
              src={imageSrc}
              alt={alt}
              className="max-h-full object-contain filter sepia brightness-90 contrast-85"
            />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#fef9f0] border-2 border-[#c0a36e] rounded-lg shadow-md transform rotate-y-180 flex flex-col justify-center items-center px-4 text-center backface-hidden bg-background">
          <Link
            to={to}
            className="text-black hover:text-accent2 font-semibold"
            aria-label={`Read more about the ${title} project`}
          >
            <h3 className="text-black">{title}</h3>
            <p className="text-sm text-black my-2 italic">{description}</p>
            <p className="underline"> Read more →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
