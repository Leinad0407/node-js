require ("dotenv").config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = "kodemiaprueba";
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`

// const koderSchema = new mongoose.Schema({
//     nombre: String,
//     genero: String, 
//     edad: Number,
// });

const Koder = mongoose.model("koder", koderSchema);

mongoose
.connect(URL)
.then((connection)=>{
    console.log("Estamos conectados a nuestra base de datos");

    // const newKoder = new Koder({
    //     nombre: "Danny",
    //     genero: "masculino",
    //     edad: 20
    // });
    // Koder.create(newKoder);
    // console.log("Registro creado")

    const koders = await koders.find({edad: 30})
    console.log(koders);
})

.catch((error)=>{
    console.error("No nos conectamos a la base de datos");
    console.error(error);
});