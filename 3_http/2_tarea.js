const http = require("http")

const server = http.createServer((request, response)=>{
    const objeto = {
        hola: "Mundo",
    }
    const unJSON = JSON.stringify(objeto);

    response.setHeader('Content-Type', 'application/json')
    response.write(unJSON);
    response.end();
})

server.listen(8000, ()=>{
    console.log("Server corriendo");
});