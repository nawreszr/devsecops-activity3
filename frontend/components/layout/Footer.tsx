export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Nawres — Portfolio DevSecOps
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/nawres" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/nawres" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
