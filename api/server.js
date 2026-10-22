const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- DONNÉES DU PORTFOLIO ---
const profileData = {
  name: "Nawres Zarrouki",
  role: "Étudiant DevSecOps",
  github: "https://github.com/nawreszr",
  email: "nawres@example.com"
};

const projectsData = [
  {
    slug: "devsecops-pipeline",
    title: "Pipeline DevSecOps",
    description: "Pipeline CI/CD complet avec Jenkins, Docker, Trivy et SonarQube.",
    technologies: ["Jenkins", "Docker", "Trivy", "SonarQube"],
  },
  {
    slug: "portfolio-next",
    title: "Portfolio Next.js",
    description: "Portfolio personnel migré vers Next.js 16 et TypeScript.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    slug: "kubernetes-cluster",
    title: "Cluster Kubernetes",
    description: "Déploiement d'un cluster K8s avec Terraform et Ansible.",
    technologies: ["Kubernetes", "Terraform", "Ansible", "Helm"],
  }
];

const skillsData = [
  {
    category: "DevOps & CI/CD",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes"]
  },
  {
    category: "Sécurité",
    items: ["Trivy", "SonarQube", "OWASP", "SAST", "SCA"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  }
];

// --- ROUTES API ---

// Route Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: "L'API fonctionne correctement !" });
});

// Route Profile
app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

// Route Projects
app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});

// Route Skills
app.get('/api/skills', (req, res) => {
  res.json(skillsData);
});

app.listen(PORT, () => {
  console.log(`🚀 API démarrée sur http://localhost:${PORT}`);
});
