import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="bg-white border rounded-lg p-6 hover:shadow-lg transition h-full">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
