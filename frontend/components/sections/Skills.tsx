"use client";

import { useState, useEffect } from "react";

interface SkillCategory {
  category: string;
  items: string[];
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`)
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Compétences (via API)</h2>
        {loading ? (
          <p>Chargement des compétences...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((cat) => (
              <div key={cat.category} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">
                  {cat.category}
                </h3>
                <ul className="space-y-1 text-gray-700">
                  {cat.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
