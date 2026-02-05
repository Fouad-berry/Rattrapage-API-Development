// Utilitaire de connexion aux bases de données
const mongoose = require('mongoose');

const connectMongo = async (uri) => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = { connectMongo };
