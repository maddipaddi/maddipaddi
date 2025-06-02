import { useParams } from "react-router";
import { projects } from "../data/projects";

export default function SingleProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found.</p>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading mb-4">{project.title}</h1>
      <img
        src={project.icon}
        alt={`${project.title} logo`}
        className="w-32 mb-4"
      />
      <p className="mb-6 text-lg">{project.longText}</p>

      <div className="mb-6">
        <h2 className="font-bold">Tech Stack:</h2>
        <ul className="list-disc list-inside">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <a href={project.repo} className="underline text-accent1">
          GitHub
        </a>
        <a href={project.live} className="underline text-accent1">
          Live Site
        </a>
      </div>
    </article>
  );
}
