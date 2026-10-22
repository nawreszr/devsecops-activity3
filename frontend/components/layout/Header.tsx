import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Nawres.dev
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="/#about" className="hover:text-blue-600">À propos</a></li>
          <li><a href="/#skills" className="hover:text-blue-600">Compétences</a></li>
          <li><Link href="/projects" className="hover:text-blue-600">Projets</Link></li>
          <li><a href="/#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
