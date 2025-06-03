import { useParams } from "react-router";
import { projects } from "../data/projects";
import ShareButton from "../components/Buttons/ShareButton";

export default function SingleProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found.</p>;

  return (
    <article className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
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
            className="bg-accent px-4 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="bg-accent px-4 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <ShareButton />
        </div>
      </div>
      <div className="bg-background p-8 text-black justify-self-stretch md:col-span-3 lg:col-span-1">
        <h2 className="font-bold mb-2">Tech Stack:</h2>
        <ul className="list-disc list-inside mb-6">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <h2 className="font-bold mb-2">Welcome to {project.title}</h2>
        <p>{project.welcome}</p>
      </div>
      <figure className="md:col-span-3 lg:col-span-2">
        <video controls className="w-full max-w-3xl mx-auto rounded shadow-lg ">
          <source src={project.video} type="video/mp4" /> Your browser does not
          support the video tag.
        </video>
        <figcaption className="mt-2 justify-self-center">
          Click-through demo of the Holidaze project
        </figcaption>
      </figure>

      <div className="bg-bookshelf-border h-10 md:col-span-3"></div>

      <div className="mx-auto bg-background p-8 text-black md:col-span-3 lg:col-span-1">
        <h2 className="font-bold mb-2">About this project</h2>
        <p>{project.about}</p>
      </div>

      <div className="bg-background p-8 text-black md:col-span-3 lg:col-span-2">
        <h2 className="font-bold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="bg-background p-8 text-black md:col-span-3">
        <h2 className="font-bold mb-2">Reflection</h2>
        <p>{project.reflection}</p>
      </div>
    </article>
  );
}
