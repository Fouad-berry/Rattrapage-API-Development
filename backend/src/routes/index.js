// Point d'entrée des routes principales
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Route de test pour vérifier le fonctionnement de l'API
router.get('/ping', (req, res) => {
	res.json({ message: "L'API fonctionne bien" });
});

router.use('/users', userRoutes);

module.exports = router;
