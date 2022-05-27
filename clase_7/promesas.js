import {unlink, readFile, writeFile} from "fs/promises"

async function crearArchivo(nombre, contenido){
    try{
        await writeFile(nombre, contenido);
        console.log(`El archivo ${nombre} fue creado`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }

}

async function leerArchivo(nombre){
    try{
        await readFile(nombre);
        console.log(`El archivo ${nombre} fue leido`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }
}

async function borrarArchivo(nombre){
    try{
        await unlink(nombre);
        console.log(`El archivo ${nombre} fue eliminado`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }
}

async function test(){
    await crearArchivo("prueba.txt", "Hola Kiders!");
    await leerArchivo("prueba.txt");
    await borrarArchivo("prueba.txt");
  
}
test()