const { request, response } = require('express')
const express = require('express')
const server = express()

server.get("/koders", (req, res)=>{
    const respuesta = {
        mensaje: "Aquí estan todos lo koders"
    };
    res.json(respuesta);
})

server.post("/koders", (req, res)=>{
    const respuesta = {
        mensaje: "Aquí puedes crear koders"
    };
    res.json(respuesta);
})

server.put("/koders", (req, res)=>{
    const respuesta = {
        mensaje: "Aquí puedes sustituir koders"
    };
    res.json(respuesta);
})


server.listen(8000, ()=>{
    console.log("El servidor se esta ejecutando")
});
