"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/shared/ProjectCard";

interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Projets (via API)</h2>
      {loading ? (
        <p>Chargement des projets...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project as any} />
          ))}
        </div>
      )}
    </section>
  );
}
