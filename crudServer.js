/* CRUD => Create, Read, Update, Delete */

// Import express & formidable
const express = require('express');
const formidable = require('express-formidable');
//Server Init
const app = express();
app.use(formidable());

//0. Importer mongoose
const mongoose = require('mongoose');

//1. Se connecter à une base (27017 = port MGDB standard)
mongoose.connect('mongodb://localhost:27017/mas');

//2. Import et activation des routes
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

app.all('*', (_, res) => {
  res.status(404).json({ message: 'page not found' });
});

app.listen(3000, () => {
  console.log('MASCRUD Server Has Started !');
});

/* Packages Utiles : express, express-formidable, mongoose, nodemon */
