import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "devsecops-pipeline",
    title: "Pipeline DevSecOps",
    description:
      "Pipeline CI/CD complet avec Jenkins, Docker, Trivy et SonarQube pour automatiser les tests de sécurité.",
    longDescription:
      "Ce projet met en place un pipeline Jenkins multi-stages qui récupère le code source, installe les dépendances, exécute les tests, scanne les vulnérabilités avec Trivy et déploie automatiquement l'application. Il inclut également une analyse SAST avec SonarQube.",
    technologies: ["Jenkins", "Docker", "Trivy", "SonarQube", "Git"],
    image: "/images/projects/devsecops-pipeline.png",
    github: "https://github.com/nawres/devsecops-pipeline",
  },
  {
    slug: "portfolio-next",
    title: "Portfolio Next.js",
    description:
      "Portfolio personnel moderne migré de HTML/CSS/JS vers Next.js 16 avec TypeScript et Tailwind CSS.",
    longDescription:
      "Ce portfolio utilise l'App Router de Next.js 16, TypeScript pour la robustesse et Tailwind CSS pour un design moderne et responsive. Les données sont séparées en fichiers de configuration pour faciliter la maintenance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/images/projects/portfolio-next.png",
    github: "https://github.com/nawres/devsecops-portfolio-next",
  },
  {
    slug: "kubernetes-cluster",
    title: "Cluster Kubernetes",
    description:
      "Déploiement d'un cluster Kubernetes avec Terraform et Ansible pour héberger des applications conteneurisées.",
    longDescription:
      "Infrastructure as Code avec Terraform pour provisionner les nœuds, Ansible pour la configuration, et déploiement d'applications via Helm charts. Le cluster est supervisé avec Prometheus et Grafana.",
    technologies: ["Kubernetes", "Terraform", "Ansible", "Helm"],
    image: "/images/projects/kubernetes-cluster.png",
    github: "https://github.com/nawres/kubernetes-cluster",
  },
];
