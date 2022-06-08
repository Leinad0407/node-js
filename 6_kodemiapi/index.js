require('dotenv').config(); //toda la configuracion de dotenv

//Importamos paquetes con require
const express = require("express");
const mongoose = require("mongoose");

const koder = require("./models/koder.model") //trae el modelo de la carpeta models

const PORT = process.env.PORT; //ligamos el puerto

//Inicializamos constantes con la configuración
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`

const app = express(); //Arranca el servidor

//GET que nos retorna todos los koders
app.get("/koders", async (req, res)=>{
    const koders = await koder.find({});

    res.json(koders);

})

mongoose
.connect(URL)
.then(()=>{
    console.log("Estamos conectados a la BD!");
    
    app.listen(PORT, ()=>{   //iNICIALIZAMOS EL SERVER
        console.log("Server ejecutandose en el puerto", PORT)
       });
})
.catch((error)=>{
console.error("Hubo un errror", error)
});
