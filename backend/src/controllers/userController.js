// Contrôleur User : gère la logique des requêtes utilisateur
const { User, userSchemaZod } = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    // Validation Zod
    userSchemaZod.parse(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};
