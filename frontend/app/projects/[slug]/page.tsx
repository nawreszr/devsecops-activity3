import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} | Nawres` : "Projet introuvable" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="container mx-auto py-16 px-4 max-w-4xl">
        <Link href="/projects" className="text-blue-600 hover:underline text-sm">
          ← Retour aux projets
        </Link>
        <h1 className="text-4xl font-bold mt-4 mb-4">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="font-semibold mb-2">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <h2 className="text-2xl font-semibold mb-3">Description détaillée</h2>
          <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-700"
            >
              Voir sur GitHub
            </a>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
