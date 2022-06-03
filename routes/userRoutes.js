// 1. import d'express
const express = require('express');
// 2. créer router qui va remplacer app
const router = express.Router();
// 3.Import des models dans les routes !
const User = require('../models/userModel');

//Create
router.post('/user', async (req, res) => {
  //1. Créer un utilisateur
  const user = new User({
    name: req.fields.name,
    city: req.fields.city,
  });

  //2. Sauvegarder dans la bdd (sauvegarde toujours asynchrone, + try catch!!)
  // Va créer la BDD & collection si elles n'existent pas
  try {
    await user.save();
    return res.json({ message: 'Account created !' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

//Read
router.get('/users', async (_, res) => {
  //1. Chercher dans la bdd
  try {
    const users = await User.find();
    //2. Répondre au client
    return res.json(users);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

//Update
router.post('/user/update', async (req, res) => {
  try {
    //1. Rechercher l'utilisateur dans la BDD
    const userId = req.fields.userId;
    const user = await User.findById(userId);

    if (user) {
      //2. Faire la modification si il existe
      user.city = req.fields.city;

      //3. sauvegarder dans la bdd
      await user.save();

      //3. Répondre au client
      return res.json(user);
    } else {
      return res.status(404).json({ message: 'user not found' });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

//Delete
router.post('/user/delete', async (req, res) => {
  try {
    //1. Rechercher dans la BDD
    const user = await User.findById(req.fields.userId);

    if (user) {
      //2. Si il existe le supprimer
      user.remove();
      //3. Repondre au client (pas besoin de save)
      res.json({ message: 'user deleted' });
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

module.exports = router;
