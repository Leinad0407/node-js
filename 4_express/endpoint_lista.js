const express = require("express");
const fs = require("fs/promises");

const server = express();

server.get("/koders", async(req, res)=>{
    const archivo = await fs.readFile("koders.json", "utf8");
    const objeto = JSON.parse(archivo);
    const koders = objeto.koders;

    
    res.json(koders);
});

server.listen(8000, ()=>{
    console.log("El servidor se esta ejecutando")
});