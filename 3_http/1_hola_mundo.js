const http = require("http") //nos trae todo el paquete de http

//creamos un seridor usando el método create server

const server = http.createServer((request, response)=>{
    //Vamos a responder al cliente
    response.write("Hola desde mi server!"); //Escribimos la respuesta
    response.end(); //cerramos o detenemos la respuesta, terminamos la respuesta y la enviamos
});

// Ponemos al servidor a escuchaer en un puerto
server.listen(8000, ()=>{  //recibe el puerto y un callback, hay un cierto tiempo en donde el sistema operaticvo nos responde
    console.log("Servidor iniciado en el puerto 8000")

})  