import { useParams } from "react-router";
import { projects } from "../data/projects";
import ShareButton from "../components/Buttons/ShareButton";

export default function SingleProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found.</p>;

  return (
    <article className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:text-lg">
      <div className="bg-bookshelf-border border-2 border-accent-gold self-center p-6 rounded">
        <img
          src={project.icon}
          alt={`${project.title} logo`}
          className="max-h-32 mx-auto filter sepia brightness-90 contrast-85"
        />
      </div>
      <div className="md:col-span-2 mx-auto">
        <h1 className="text-3xl font-heading font-semibold mb-4">
          {project.title}
        </h1>
        <p className="mb-2 font-medium">{project.blurb}</p>
        <p className="mb-4 italic">{project.collab}</p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={project.repo}
            className="bg-accent px-4 py-2 rounded shadow-lg hover:bg-primary font-medium active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="bg-accent px-4 py-2 rounded shadow-lg hover:bg-primary font-medium active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <ShareButton />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 md:col-span-3 max-w-xl lg:max-w-7xl mx-auto">
        <div className="bg-background shadow-xl p-4 md:p-8 text-black flex flex-wrap gap-2 flex-[1.5] min-w-[300px] rounded">
          <div>
            <h2 className="font-bold mb-2">Tech Stack:</h2>
            <ul className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-1 rounded-md bg-gradient-to-br from-[#e5dcc5] to-[#c2a983] text-[#2b1e12] shadow-md border border-[#a88c6f]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Welcome to {project.title}</h2>
            <blockquote className="border-l-4 border-accent pl-4 text-[color:var(--text-muted)]">
              {project.welcome}
            </blockquote>
          </div>
        </div>
        <figure className="flex-[1.5] min-w-[300px] self-center">
          <video controls className="rounded shadow-lg">
            <source src={project.video} type="video/mp4" /> Your browser does
            not support the video tag.
          </video>
          <figcaption className="mt-2 text-center">
            Click-through demo of the Holidaze project
          </figcaption>
        </figure>
      </div>

      <div className="bg-bookshelf-border h-10 md:col-span-3"></div>

      <div className="mx-auto bg-background p-4 md:p-8 text-black md:col-span-3 lg:col-span-1 shadow-xl rounded">
        <h2 className="font-bold mb-2">About this project</h2>
        <p>{project.about}</p>
      </div>

      <div className="bg-background p-4 md:p-8 text-black md:col-span-3 lg:col-span-2 shadow-xl rounded">
        <h2 className="font-bold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="bg-background p-4 md:p-8 text-black md:col-span-3 shadow-xl rounded">
        <h2 className="font-bold mb-2">Reflection</h2>
        <p>{project.reflection}</p>
      </div>
    </article>
  );
}
