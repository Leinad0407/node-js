const express = require("express");
const fs=require("fs/promises");

const server = express();

// middleware para convertit request a JSON
server.use(express.json())

server.get("/", (request, response)=>{
    response.send("Hola Koders!")
});

server.get("/koders", async (req, res)=>{
    const archivo = await fs.readFile("koders.json", "utf8")
    const objeto = JSON.parse(archivo); //convierte un string a un objeto
    const koders = objeto.koders;


    res.json(koders)

});

server.post("/koder", (req, res)=>{
    const respuesta = {
        ok: "Aquí puedes crear koders",
    }

    res.json(respuesta);
});

server.put("/koder", (req, res)=>{
    const respuesta = {
        ok: "Aquí puedes sustituir koders",
    }

    res.json(respuesta);
});

server.listen(8000, ()=>{
    console.log("Servidor ejecutandose");
});