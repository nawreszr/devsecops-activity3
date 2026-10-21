# Activité 3 – Automatisation avec Ansible

> **Enseignant :** Wahid Hamdi
> **Auteur :** Nawres Zarrouki

## VII. Automatisation avec Ansible

### 26. Fichier inventory

```ini
[webservers]
localhost ansible_connection=local
```

Test de communication :

```bash
ansible all -i inventory -m ping
```

### 28. Playbook d'installation de Docker

Fichier `install_docker.yml` :

```yaml
---
- name: Installer Docker proprement
  hosts: webservers
  become: yes
  tasks:
    - name: Supprimer les paquets Docker conflictuels (dépôt officiel)
      apt:
        name:
          - docker-ce
          - docker-ce-cli
          - containerd.io
          - docker-compose-plugin
        state: absent
        purge: yes
        autoremove: yes

    - name: Mettre à jour le cache apt
      apt:
        update_cache: yes

    - name: Installer Docker et Docker Compose (dépôts Ubuntu)
      apt:
        name:
          - docker.io
          - docker-compose-v2
        state: present

    - name: Démarrer et activer le service Docker
      systemd:
        name: docker
        state: started
        enabled: yes

    - name: Ajouter l'utilisateur au groupe docker
      user:
        name: nawres
        groups: docker
        append: yes
```

Exécution et vérification :

```bash
ansible-playbook -i inventory install_docker.yml
docker --version
```

Résultat : `PLAY RECAP : ok=6 changed=4 unreachable=0 failed=0`, puis `Docker version 29.1.3`.

![Installation de Docker avec Ansible et docker --version](docs/01-ansible-docker-install.png)
