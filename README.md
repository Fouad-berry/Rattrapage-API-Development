# Rattrapage API Development

## Présentation
Ce projet propose une API Node.js dockerisée, connectée à MongoDB (avec Mongoose comme ORM) et InfluxDB. La validation des schémas est assurée par Zod.

## Arborescence réelle du projet

```
Rattrapage-API-Development/
│
├── backend/
│   ├── src/
│   │   ├── controllers/      # Logique des requêtes (ex: userController.js)
│   │   ├── services/         # Logique métier réutilisable (ex: userService.js)
│   │   ├── middlewares/      # Middlewares Express (ex: errorHandler.js)
│   │   ├── models/           # Schémas de données (Zod + Mongoose)
│   │   ├── routes/           # Endpoints de l’API (ex: userRoutes.js, index.js)
│   │   ├── utils/            # Fonctions utilitaires (ex: db.js)
│   │   └── app.js            # Point d’entrée Express
│   ├── .env                  # Variables d’environnement
│   ├── package.json          # Dépendances Node.js
│   └── Dockerfile            # Image Docker du backend
│
├── mongo-data/               # Volume persistant MongoDB
├── influxdb-data/            # Volume persistant InfluxDB
│
├── docker-compose.yml        # Orchestration des services
└── README.md                 # Documentation et justification des choix
```

## Choix techniques
- **Node.js + Express** : Simplicité et rapidité pour créer des APIs REST.
- **Zod** : Validation typée et efficace des schémas de données.
- **Mongoose** : ORM pour MongoDB, facilite la gestion des modèles et des requêtes.
- **Docker Compose** : Orchestration simple des services (backend, MongoDB, InfluxDB).
- **Architecture modulaire** : Séparation claire des responsabilités (contrôleurs, services, middlewares, modèles).


## Schéma du flux de données (API)

```text
Client HTTP
	|
	v
[Route Express] ---> [Middleware (Zod)] ---> [Contrôleur] ---> [Service] ---> [Base de données]
	|                    |                       |                |                |
	|                    |                       |                |                +---> MongoDB (Mongoose)
	|                    |                       |                +----------------+---> InfluxDB (direct)
	|                    |                       |                                 
	|<-------------------+-----------------------+----------------+
			Réponse JSON
```

## Exemple de séquence (création d'utilisateur)

```text
POST /api/users
	|
	v
userRoutes.js
	|
	v
userController.createUser
	|
	v
userSchemaZod.parse(req.body)   (validation)
	|
	v
UserService.createUser          (logique métier)
	|
	v
Mongoose (sauvegarde en base)
	|
	v
Réponse JSON
```

## Lancement du projet
```bash
docker-compose up --build
```

## Auteur
Fouad-berry
