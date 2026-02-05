# Rattrapage API Development

## Présentation
Ce projet propose une API Node.js dockerisée, connectée à MongoDB (avec Mongoose comme ORM) et InfluxDB. La validation des schémas est assurée par Zod.

## Arborescence
Voir le code source pour l’arborescence complète et les rôles des dossiers/fichiers.

## Choix techniques
- **Node.js + Express** : Simplicité et rapidité pour créer des APIs REST.
- **Zod** : Validation typée et efficace des schémas de données.
- **Mongoose** : ORM pour MongoDB, facilite la gestion des modèles et des requêtes.
- **Docker Compose** : Orchestration simple des services (backend, MongoDB, InfluxDB).
- **Architecture modulaire** : Séparation claire des responsabilités (contrôleurs, services, middlewares, modèles).

## Flux de données
1. Requête HTTP reçue par Express.
2. Middleware (ex : validation Zod) vérifie les données.
3. Contrôleur traite la requête et appelle le service.
4. Service interagit avec la base de données via l’ORM.
5. Réponse renvoyée au client.

## Lancement du projet
```bash
docker-compose up --build
```

## Auteur
Fouad-berry
