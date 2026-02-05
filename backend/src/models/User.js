// Modèle User avec Mongoose et validation Zod
const mongoose = require('mongoose');
const { z } = require('zod');

// Schéma Zod pour validation
const userSchemaZod = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().int().positive()
});

// Schéma Mongoose
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchemaZod };
