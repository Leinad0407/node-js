//Una funcion que reciba un arreglo y retorne el numero más grande

function getMax(array){
    let maxNum = array[0];

    for (let i=0; i<array.length; i++){
        console.log(array[i])
        if(array[i]>maxNum){
            console.log(`El elemento ${array[i]} es más grande que ${maxNum}`)
            maxNum = array[i]
        }

    }
    return maxNum;
}
//getMax([2, 3, 20, 10])

function getMaxWhitReduce(array){
    let maxNum =array.reduce((maxNum, current) =>{
        if(current > maxNum)
        return current //current ahora será maxNum
        return maxNum // maxNum se queda con el número mayor
    })
    return maxNum;
}
//console.log('El número más grande es: ', getMaxWhitReduce([2, 3, 20, 10]))

//Voletar un string 
//String hola 

function reverseString(string){
    const reversed = '';
    for (let i = string.length-1; i >= 0; i-- ){
        reversed += string[i];
        console.log('reversed: ', reversed)
    }
    return reversed;
}

//console.log('resultado', reverseString('Hola'))

function irACasa(callback){
    console.log("Caminando a casa");
    console.log("Llegue a mi casa! :D")

    if(callback != undefined)
    callback();
    else console.log("No hago nada mas")

}

function avisar(){
    console.log("Aviso que ya llegue");
}

function dormir(){
    console.log("A dormir")
}

//Ir a mi casa y luego avisar
irACasa(avisar);

//ir a micasa y luego duermo
irACasa(dormir);

//ir a casa y no hacer nada
irACasa();

function factory(mensaje){
    console.log("Trabajando ....")


    return function (){
        console.log("Mensaje: ", mensaje)
    }

}

const saludar = factory("Saludando !")
saludar()
const despedir = factory("Adios !!!")
despedir()