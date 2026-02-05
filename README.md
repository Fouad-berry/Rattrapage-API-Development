
# 🚀 Rattrapage API Development


## 🛠️ Stack Technique

<p>
	<img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" />
	<img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" />
	<img src="https://img.shields.io/badge/Zod-3.22.4-8a2be2?logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOGEyYmUyIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+" />
	<img src="https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white" />
	<img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
	<img src="https://img.shields.io/badge/InfluxDB-22ADF6?logo=influxdb&logoColor=white" />
	<img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" />
</p>

## Présentation
Ce projet propose une API Node.js dockerisée, connectée à <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" height="20"/> (avec <img src="https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white" height="20"/> comme ORM) et <img src="https://img.shields.io/badge/InfluxDB-22ADF6?logo=influxdb&logoColor=white" height="20"/>. La validation des schémas est assurée par <img src="https://img.shields.io/badge/Zod-3.22.4-8a2be2?logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOGEyYmUyIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+" height="20"/>.

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



## 🗺️ Schéma d'architecture (visuel)

```mermaid
flowchart TD
	 A[🌐 Client HTTP] --> B[🔗 Route Express]
	 B --> C[🛡️ Middleware (Zod)]
	 C --> D[🧑‍💻 Contrôleur]
	 D --> E[⚙️ Service]
	 E --> F1[(🍃 MongoDB\nMongoose)]
	 E --> F2[(📈 InfluxDB)]
	 F1 -.->|Réponse JSON| A
	 F2 -.->|Réponse JSON| A
```

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-3.22.4-8a2be2?logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOGEyYmUyIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+" />
  <img src="https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/InfluxDB-22ADF6?logo=influxdb&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" />
</p>

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
