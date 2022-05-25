const fs = require('fs')

// fs.writeFile('hola.txt', 'Mi primer archivo', (err)=>{
//     if(err){
//         console.log('Algo salio mal: ', err)
//     }
//     else{
//         console.log('Se creo el archivo! :)')
//     }
// })

//Nombre del archivo y contenido
function crearArchivo(nombre, contenido){
    fs.writeFile(nombre, contenido, (err) =>{
        if (err){
            console.error("Algo salio mal: ", err);            
        } else{
            console.log("Se creo el archivo :)");
        };

    });
}

crearArchivo("hola.txt", "Nuevo archivo");

//Usamdo Readfile 
function leerArchivo(nombre){
    fs.readFile('hola.txt', 'utf8', (err, data)=>{
        console.log(data);
    })
    console.log('Archivo leido')
}
leerArchivo("hola.txt")

function borrarArchivo(nombre){
    fs.unlink(nombre, err =>{
        if (err) console.log(err);
        else{
            console.log("Archivo Eliminado");
        }

    })
}
borrarArchivo("hola.txt")