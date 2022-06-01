const express = require("express");

const server = express();

server.get("/koder", (request, response)=>{
    response.send("Aquí estan todos los koders")
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