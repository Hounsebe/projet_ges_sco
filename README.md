# Gestion Scolaire

## Description

Gestion Scolaire est une application full-stack pour gérer les étudiants, les cours, les inscriptions et les notes. Elle combine une interface utilisateur Angular 19 avec un backend Spring Boot 3.3.0 et expose une API REST moderne.

## 🚀 Fonctionnalités

- Gestion des étudiants (CRUD)
- Gestion des cours
- Inscriptions des étudiants aux cours
- Enregistrement des notes
- Consultation des bulletins
- Tableau de bord avec statistiques et résumé en temps réel

## 🧩 Architecture

- **Frontend** : Angular 19
- **Backend** : Spring Boot 3.3.0
- **Base de données** : MySQL (configuration dans `application.properties`)
- **Packaging** : application frontend intégrée au JAR Spring Boot

## Prérequis

- Java 17 ou supérieur
- Node.js + npm
- Maven
- Port `8080` disponible

## Installation et exécution

### 1. Construire le frontend

```bash
cd frontend
npm install
npm run build
```

### 2. Intégrer le frontend dans le backend

```bash
cd ..\projet_ges_sco
# Copier les fichiers générés de frontend/dist/frontend dans src/main/resources/static
```

### 3. Construire le backend

```bash
cd projet_ges_sco
./mvnw.cmd clean package -DskipTests
```

### 4. Lancer l'application

```bash
java -jar target/student-api-0.0.1-SNAPSHOT.jar
```

### 5. Accéder à l'application

- Interface : `http://localhost:8080`
- API : `http://localhost:8080/api`

## Endpoints principaux

- `GET /api/etudiants`
- `POST /api/etudiants`
- `PUT /api/etudiants/{id}`
- `DELETE /api/etudiants/{id}`
- `GET /api/cours`
- `POST /api/inscriptions`
- `GET /api/inscriptions`
- `POST /api/notes`

## Configuration

Les paramètres de base de données se trouvent dans :

- `projet_ges_sco/src/main/resources/application.properties`

## Remarques

- Le frontend est précompilé et servi depuis `src/main/resources/static`
- Le déploiement final se fait dans un JAR unique prêt à exécuter
- La base de données MySQL doit être disponible et configurée correctement avant lancement

## Licence

Ce projet est fourni tel quel, libre d'utilisation et de modification.
