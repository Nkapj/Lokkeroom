const express = require("express");
const User = require("../models/User");// va cherhcer le model 

const router = express.Router();

// Route de test : Ajouter un utilisateur
router.post("/add", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;// va chercher les donneer entree 
        const newUser = new User({ name, email, password, role });// cree un nouvel utilisateur 
        await newUser.save();// pq save ? 
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout", error });
    }
});

router.get("/", async(req, res)=> {
    try {
        const users = await User.find();// recupéreer 
        res.json(users)// les afficher 
    } catch (error){
        res.status(500).json({ message: "Erreur lors de la récupération", error });
    }
})

module.exports = router;
