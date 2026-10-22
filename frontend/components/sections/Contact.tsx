export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">
          Une question, un projet ? N&apos;hésitez pas à me contacter.
        </p>
        <a
          href="mailto:nawres@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Envoyer un email
        </a>
      </div>
    </section>
  );
}
