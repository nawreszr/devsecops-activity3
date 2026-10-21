# 🚀 Activité 3 — Ansible, API Node.js & Dockerisation

Ce projet regroupe l'automatisation avec Ansible, la création d'une API Node.js/Express pour le portfolio, et la conteneurisation complète (Frontend + API).

**Auteur** : Nawres Zarrouki

---

## VII. Automatisation avec Ansibl
L'automatisation est réalisée à l'aide d'Ansible pour configurer nos serveurs.

### 26. Configuration de l'inventaire

Un fichier `inventory` a été créé pour cibler le serveur local :

```ini
[webservers]
localhost ansible_connection=local
Test de communication :

bash
ansible all -i inventory -m ping
27. Playbook d'installation de Git
Le playbook install_git.yml permet d'installer le package Git :

yaml
---
- name: Installer Git
  hosts: webservers
  become: yes
  tasks:
    - name: Mettre à jour le cache apt
      apt:
        update_cache: yes

    - name: Installer le package git
      apt:
        name: git
        state: present
28. Playbook d'installation de Docker
Le playbook install_docker.yml permet d'installer Docker et Docker Compose de manière propre :

yaml
---
- name: Installer Docker proprement
  hosts: webservers
  become: yes
  tasks:
    - name: Supprimer les paquets Docker conflictuels
      apt:
        name: [docker-ce, docker-ce-cli, containerd.io, docker-compose-plugin]
        state: absent
        purge: yes
        autoremove: yes

    - name: Mettre à jour le cache apt
      apt:
        update_cache: yes

    - name: Installer Docker et Docker Compose
      apt:
        name: [docker.io, docker-compose-v2]
        state: present

    - name: Démarrer et activer le service Docker
      systemd:
        name: docker
        state: started
        enabled: yes
📸 Preuve : Exécution du playbook Docker et vérification de la version.

https://./docs/01-ansible-docker-install.png
