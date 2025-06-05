import { Link } from "react-router";

export default function ProjectCard({ title, imageSrc, alt, description, to }) {
  return (
    <div className="w-full max-w-xs perspective p-2 mx-auto drop-shadow-[2px_4px_2px_rgba(0,0,0,0.4)]">
      <div className="relative w-full h-50 transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
        {/* Front Side */}
        <div className=" absolute inset-0 border-2 border-accent-gold rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden px-4  bg-bookshelf-border max">
          <div className="max-h-32">
            <img
              src={imageSrc}
              alt={alt}
              className="max-h-full object-contain filter sepia brightness-90 contrast-85"
            />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-background border-2 border-accent-gold rounded-lg shadow-md transform rotate-y-180 flex flex-col justify-center items-center px-4 text-center backface-hidden">
          <Link
            to={to}
            className="text-copy hover:text-accent2 font-semibold"
            aria-label={`Read more about the ${title} project`}
          >
            <h3 className="text-copy">{title}</h3>
            <p className="text-sm text-copy my-2 italic">{description}</p>
            <p className="underline decoration-secondary">Read more →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
