# Activité 3 – Ansible, API Node.js/Express et Docker Compose

> **Enseignant :** Wahid Hamdi
> **Auteur :** Nawres Zarrouki
> **Thèmes :** automatisation avec Ansible, API Express, variables d'environnement, dockerisation frontend + API

## Sommaire

- [VII. Automatisation avec Ansible](#vii-automatisation-avec-ansible)
- [VIII. API Node.js / Express](#viii-api-nodejs--express)
- [IX. Variables d'environnement](#ix-variables-denvironnement)
- [X. Dockerisation frontend + API](#x-dockerisation-frontend--api)

Les captures d'écran sont dans le dossier [`docs/`](docs/).

---

## VII. Automatisation avec Ansible

### 25. Installation d'Ansible

```bash
sudo apt update
sudo apt install -y ansible
ansible --version
```

### 26. Inventory et test de communication

Fichier `inventory` :

```ini
[servers]
localhost ansible_connection=local
# Pour un serveur distant :
# 192.168.42.130 ansible_user=nawres
```

Commande de test :

```bash
ansible all -i inventory -m ping
```

![Test ansible ping](docs/02-ansible-ping.png)

### 27. Premier playbook : installer un package (curl)

Fichier `install_curl.yml` :

```yaml
---
- name: Installer curl
  hosts: all
  become: true
  tasks:
    - name: Installer le package curl
      ansible.builtin.apt:
        name: curl
        state: present
        update_cache: true
```

```bash
ansible-playbook -i inventory install_curl.yml
```

![Exécution du playbook](docs/03-ansible-git.png)

### 28. Playbook d'installation de Docker

Fichier `install_docker.yml` :

```yaml
---
- name: Installer Docker proprement
  hosts: all
  become: true
  tasks:
    - name: Supprimer les paquets Docker conflictuels (dépôt officiel)
      ansible.builtin.apt:
        name:
          - docker.io
          - docker-compose
          - docker-doc
          - podman-docker
        state: absent

    - name: Mettre à jour le cache apt
      ansible.builtin.apt:
        update_cache: true

    - name: Installer Docker et Docker Compose (dépôts Ubuntu)
      ansible.builtin.apt:
        name:
          - docker.io
          - docker-compose-v2
        state: present

    - name: Démarrer et activer le service Docker
      ansible.builtin.service:
        name: docker
        state: started
        enabled: true

    - name: Ajouter l'utilisateur au groupe docker
      ansible.builtin.user:
        name: "{{ ansible_user_id }}"
        groups: docker
        append: true
```

```bash
ansible-playbook -i inventory install_docker.yml
docker --version
```

Résultat : `PLAY RECAP : ok=6 changed=4 unreachable=0 failed=0` et `Docker version 29.1.3`.

![Installation de Docker avec Ansible et docker --version](docs/01-ansible-docker-install.png)

---

## VIII. API Node.js / Express

### 29. Structure du projet et démarrage

```
api/
├── package.json
├── server.js
├── data/
│   ├── profile.json
│   ├── projects.json
│   └── skills.json
└── .env.example
```

```bash
cd api
npm init -y
npm install express cors dotenv
node server.js
```

Fichier `api/server.js` :

```js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const profile = require("./data/profile.json");
const projects = require("./data/projects.json");
const skills = require("./data/skills.json");

const app = express();
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API opérationnelle" });
});

app.get("/api/profile", (req, res) => res.json(profile));
app.get("/api/projects", (req, res) => res.json(projects));
app.get("/api/skills", (req, res) => res.json(skills));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API démarrée sur le port ${PORT}`));
```

### 30. Route `GET /api/health`

Retourne l'état de l'API.

```bash
curl http://localhost:4000/api/health
```

### 31. Route `GET /api/profile`

Retourne les informations principales du Portfolio au format JSON.

```bash
curl http://localhost:4000/api/profile
```

### 32. Route `GET /api/projects`

Retourne la liste des projets du Portfolio.

```bash
curl http://localhost:4000/api/projects
```

### 33. Route `GET /api/skills`

Retourne la liste des compétences.

```bash
curl http://localhost:4000/api/skills
```

### Résultat des tests (questions 30 à 33)

La capture suivante regroupe les quatre appels `curl` : `/api/health`, `/api/profile`, `/api/projects` et `/api/skills`.

![Tests curl des 4 routes de l'API](docs/04-api-test.png)

### 34. Frontend Next.js : projets depuis l'API

Le frontend ne lit plus uniquement des données locales : il appelle l'API Express avec `fetch` et affiche la réponse JSON.

```js
const res = await fetch(`${process.env.API_URL}/api/projects`, { cache: "no-store" });
const projects = await res.json();
```

### 35. Frontend Next.js : compétences depuis l'API

Même principe pour les compétences, avec `/api/skills`.

```js
const res = await fetch(`${process.env.API_URL}/api/skills`, { cache: "no-store" });
const skills = await res.json();
```

### Résultat (questions 34 et 35)

Le frontend consomme l'API : les projets et les compétences affichés viennent des routes `/api/projects` et `/api/skills`.

![Le frontend consomme l'API](docs/04-frontend-api.png)

---

## IX. Variables d'environnement

_À compléter._

## X. Dockerisation frontend + API

_À compléter._
