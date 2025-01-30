// shema pour les groupes de messagerie 
const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // va chercher l'ID dans la reference du "shema user"
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Group", groupSchema);
