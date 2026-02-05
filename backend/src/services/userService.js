// Service User : logique métier réutilisable (exemple)
const { User } = require('../models/User');

exports.findAllUsers = () => User.find();
exports.createUser = (data) => new User(data).save();
