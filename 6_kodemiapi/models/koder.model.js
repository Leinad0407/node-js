const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
nombre: String,
genero: String, 
edad: Number,
});

const koder = mongoose.model("koders", koderSchema);

//Exportamos el modelo de koder
module.exports = koder;