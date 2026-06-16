# 🎓 Plateforme de Gestion Scolaire — Projet de Session 05

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-19.0.0-red.svg)](https://angular.dev/)
[![Java](https://img.shields.io/badge/Java-17%20%2F%2021-orange.svg)](https://www.oracle.com/java/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#licence)

## 📝 Description

**Gestion Scolaire** est une application web monopage (SPA) *Full-Stack* conçue pour dématérialiser et automatiser le suivi pédagogique d'un établissement d'enseignement supérieur. 

L'application combine une interface moderne développée sous **Angular 19** et une API REST robuste construite avec **Spring Boot 3.3.0**. L'ensemble est conçu pour être compilé sous la forme d'un **JAR unique exécutable**, embarquant à la fois le serveur et l'interface pour une portabilité totale.

---

## 🚀 Fonctionnalités Clés

*   **Tableau de Bord** : Statistiques globales en temps réel (effectifs, taux de réussite) et résumé d'activité.
*   **Dossiers Étudiants (CRUD complet)** : Création d'étudiants avec génération automatique de matricule unique (`GL2024-XXX`), modification, suppression en cascade et filtres de recherche (nom, filière, niveau).
*   **Catalogue des Cours** : Gestion des matières, de leurs codes uniques et de leurs coefficients.
*   **Inscriptions Intelligentes** : Formulaire interactif d'inscription liant les étudiants aux cours avec détection automatique des doublons en base de données.
*   **Saisie & Calcul des Notes** : Attribution de notes pondérées par évaluation (DS, EXAM, TP) entre 0 et 20.
*   **Génération de Bulletins** : Restitution instantanée d'un bulletin de notes consolidé avec calcul de la moyenne générale pondérée, de la mention et de la décision de passage (ADMIS / AJOURNÉ).

---

## 🏗️ Architecture du Projet

```text
gestionScolaire/
├── frontend/                # Application cliente Angular 19
└── projet_ges_sco/          # Serveur API REST Spring Boot 3.3.0

  - Base de Données : MySQL (configurée par défaut dans application.properties).
  - Gestion de la Sécurité : Configurée en mode permissive (permitAll) pour
    simplifier l'intégration locale.
  - Exceptions Globales : Centralisées via @RestControllerAdvice pour renvoyer
    des codes d'erreur HTTP explicites au client.

💻 Prérequis

Avant de lancer le projet, assurez-vous de disposer des outils suivants :

  - Java 17 ou supérieur (JDK)
  - Node.js (v18+) et npm
  - Maven (ou utilisation du wrapper ./mvnw inclus)
  - Le port 8080 de votre machine doit être libre.

🛠️ Installation et Exécution

1. Développement en mode classique (Hot-Reload)

Pour travailler confortablement sur le code avec rechargement automatique en
temps réel, lancez les deux serveurs séparément.

Étape A : Lancer le Frontend Angular

Ouvrez un premier terminal :

cd frontend
npm install
ng serve

L'interface web sera accessible sur : http://localhost:4200

Étape B : Lancer le Backend Spring Boot

Ouvrez un second terminal :

cd projet_ges_sco
# Sur Windows :
mvnw spring-boot:run

Le serveur d'API sera disponible sur : http://localhost:8080

2. Compilation et Packaging en JAR Unique (Production)

Pour packager l'intégralité du projet dans un seul fichier exécutable .jar clé
en main, suivez ces étapes dans l'ordre :

Étape A : Compiler le Frontend Angular

cd frontend
npm install
npm run build

Les fichiers de production seront générés dans frontend/dist/frontend/browser/.

Étape B : Intégrer le Frontend dans le dossier static de Spring Boot

Copiez les fichiers compilés d'Angular dans le dossier des ressources statiques
de Spring Boot.

  - Sur Windows (Command Prompt) :
    cd ..\projet_ges_sco
    xcopy /E /I /Y ..\frontend\dist\frontend\browser\* src\main\resources\static\
  - Sur macOS / Linux / Git Bash :
    cd ../projet_ges_sco
    cp -r ../frontend/dist/frontend/browser/* src/main/resources/static/

Étape C : Compiler et packager le JAR unique

Depuis le dossier projet_ges_sco/ :

# Sur Windows :
.\mvnw.cmd clean package -DskipTests
# Sur macOS/Linux :
./mvnw clean package -DskipTests

Le fichier final est généré dans target/student-api-0.0.1-SNAPSHOT.jar.

Étape D : Lancer l'application autonome

java -jar target/student-api-0.0.1-SNAPSHOT.jar

  - Accès à l'application complète : http://localhost:8080
  - Documentation de l'API (Swagger UI) :
    http://localhost:8080/swagger-ui/index.html

🗺️ Cartographie de l'API REST

Voici la liste complète des endpoints exposés par notre serveur :

👤 Gestion des Étudiants (/api/etudiants)

  - GET /api/etudiants : Liste tous les étudiants de l'établissement.
  - POST /api/etudiants : Crée un nouvel étudiant (génération automatique du
    matricule).
  - PUT /api/etudiants/{id} : Modifie les informations d'un étudiant.
  - DELETE /api/etudiants/{id} : Supprime un étudiant ainsi que toutes ses
    inscriptions (Cascade).
  - GET /api/etudiants/{id}/bulletin : Génère le bulletin officiel consolidé
    (Calculs et moyennes).

📚 Gestion des Cours (/api/cours)

  - GET /api/cours : Liste tous les cours disponibles.
  - POST /api/cours : Ajoute une nouvelle matière au catalogue.
  - PUT /api/cours/{id} : Modifie un cours existant.
  - DELETE /api/cours/{id} : Supprime un cours et ses inscriptions associées.
  - GET /api/cours/{id}/etudiants : Liste tous les étudiants inscrits à ce cours
    spécifique.
  - GET /api/cours/{id}/statistiques : Extrait la moyenne de la classe, les
    notes min/max et le taux de réussite.

✍️ Inscriptions & Notes (/api/inscriptions & /api/notes)

  - GET /api/inscriptions : Liste toutes les inscriptions de l'établissement
    (utile pour la saisie de notes).
  - POST /api/inscriptions : Inscrit un étudiant à un cours (vérification
    d'intégrité).
  - DELETE /api/inscriptions/{id} : Désinscrit un étudiant d'un cours (bloqué si
    une note existe déjà).
  - POST /api/notes : Enregistre une note pour une inscription donnée (DS, EXAM,
    TP).
  - PUT /api/notes/{id} : Modifie une note en cas d'erreur de saisie.

👥 Équipe Projet

  - Tchango Louis Miller : Lead Développeur Frontend & Intégration API.
  - Hounsebe Temoa Honorine : Développeur Backend (API REST, JPA & Base de
    données).
  - Lekobou Tangoua Gaetan : Développeur Backend (API REST, JPA & Base de
    données).

