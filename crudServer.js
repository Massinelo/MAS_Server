/* CRUD => Create, Read, Update, Delete */

// Imports
const express = require('express');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
require('dotenv').config();
// Routes
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 3000;

//Server Init
const app = express();
app.use(formidable());
app.use(userRoutes);

mongoose.connect('mongodb://localhost:27017/mas');

app.all('*', (_, res) => {
  res.status(404).json({ message: 'page not found' });
});

app.listen(PORT, () => {
  console.log(`MASCRUD Server Has Started on port ${PORT}!`);
});

/* Packages Utiles : express, express-formidable, mongoose, nodemon, dotenv */
