// configurer la connexion a mongoDB 
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // enfait on met le proces env pour cacher mes donner de mongoDB username et password car le dossier env sera dans 
    //Gitignore et donc pas sur le github visible a tous 
    console.log("connecté !");
  } catch (err) {
    console.error("❌ Erreur de connexion", err);
  }
};

module.exports = connectDB;

