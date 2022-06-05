const { request, response } = require('express')
const express = require('express')
const server = express()

server.get('/', (request, response)=>{
    response.send('Hola mundo!, este es mi primer programa en express'); //peticion y respuesta
});

server.post("/users", (req, res)=>{
    const respuesta = {
        ok: "Endpoint users funcionando",
    };
    res.json(respuesta);
})

server.listen(8000, ()=>{
    console.log("El servidor se esta ejecutando")
});
