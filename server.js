// configuration du serveur 
require("dotenv").config();//va aller chercher les variable dans le fichier env 
// le config() permet de de lire le fichie ret d'ajouter chacune a process env 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 4000;


const app = express();


app.use(express.json()); // Pour lire le JSON 
app.use(cors()); 


// Connexion à MongoDB
const connectDB = require("./config/db"); // récupère les données de connection dans le fichier config 
connectDB()// appel la fonction pour l'éxecuter 


// route a importrer 
const userRoutes = require("./routes/userRoutes");
//const groupRoutes = require("./routes/groupRoutes");
//const messageRoutes = require("./routes/messageRoutes");

app.use("/users", userRoutes);
//app.use("/api/groups", groupRoutes);
//app.use("/api/messages", messageRoutes);

// Lancement du serveur sur un port 
app.listen(port, () => {
  console.log(`Serveur lancé: http://localhost:${port}`);
})