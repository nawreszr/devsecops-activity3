import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "DevOps & CI/CD",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Ansible", "Linux", "Nginx"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Sécurité",
    items: ["Trivy", "SonarQube", "OWASP", "SAST", "SCA"],
  },
  {
    category: "Langages",
    items: ["JavaScript", "TypeScript", "Python", "Bash", "YAML"],
  },
];
