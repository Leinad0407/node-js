import {unlink, readFile, appendFile, mkdir} from "fs/promises"

async function crearCarpeta(nombre){
    try{
        await mkdir(nombre);
        console.log(`El archivo ${nombre} fue creado`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }

}

async function leerCarpeta(nombre){
    try{
        await readFile(nombre);
        console.log(`El archivo ${nombre} fue leido`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }
}

async function abriCarpeta(nombre){
    try{
        await appendFile(nombre);
        console.log(`El archivo ${nombre} fue abierto`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }
}

async function borrarCarpeta(nombre){
    try{
        await unlink(nombre);
        console.log(`El archivo ${nombre} fue eliminado`)
    } catch (error){
        console.error("No se encontró el archivo")
        console.error(error);
    }
}

async function test(){
    await crearCarpeta("prueba");
    await leerCarpeta("prueba");
    await abriCarpeta("prueba");
    await borrarCarpeta("prueba");
  
}
test()