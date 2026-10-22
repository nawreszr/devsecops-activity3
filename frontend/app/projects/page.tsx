import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projets | Nawres Portfolio",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Tous mes projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
