// Import d'express
const express = require('express');
// Initialisation du server
const app = express();

//Création de routes
app.get('/testo', function (req, res) {
  res.json({ message: 'ca marche ! mon gaaaaars !' });
});

//Pour écouter les requêtes du port 3000
app.listen(3000, () => {
  console.log('MAS Server Started !');
});

/* 
Pour démarrer le serveur => node [nomDuFichier] || npx nodemon [nomDuFichier]
Le serveur est accessible sur le réseau local, en accédant à :
http://127.0.0.1:3000
http://localhost:3000 
*/
