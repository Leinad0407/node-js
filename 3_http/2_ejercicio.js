const http = require("http") //nos trae todo el paquete de http

//creamos un seridor usando el método create server

const server = http.createServer((request, response)=>{
    //Vamos a responder al cliente
    const respuesta1 = request.url //Nos va a imprimir la URL de la peticion que realizamos
    console.log("Metodo:", request.method) //Metodo de la peticion 

    if(respuesta1=="/koder"){
        response.write("Aquí solo hay un koder!"); //Escribimos la respuesta
    }
    if(respuesta1=="/koders"){
        response.write("Aqui estan todos los koders!"); //Escribimos la respuesta
    }
    
    if(respuesta1!="/koder" & respuesta1!="/koders"){
        response.write("no se que hacer, aiuda"); //Escribimos la respuesta
    }

    response.end(); //cerramos o detenemos la respuesta, terminamos la respuesta y la enviamos
});

// Ponemos al servidor a escuchaer en un puerto
server.listen(8000, ()=>{  //recibe el puerto y un callback, hay un cierto tiempo en donde el sistema operaticvo nos responde
    console.log("Servidor iniciado en el puerto 8000")

});