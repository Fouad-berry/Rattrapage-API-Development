// Middleware de gestion des erreurs
module.exports = (err, req, res, next) => {
  if (err.name === 'ZodError') {
    return res.status(400).json({ error: err.errors });
  }
  res.status(500).json({ error: err.message });
};
