// shema pour les messages que les users envoie 
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },// qui envoi le message donc dans user 
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },// dans quel groupe c'est envoyé 
    createdAt: { type: Date, default: Date.now } // a quel heure ca a ete envoyer 
});

module.exports = mongoose.model("Message", messageSchema);
