//Se recibe un arreglo y un callback
//Ejecutar el callback a cada elemento del arreglo 
// comparar si el valor buscado es igual a algún elemneto del arreglo 
//Devolver un nuevo arreglo que contengan los elementos que cumplan con la condicion establecida


function filter(array, callback){
    const resultados = [];
    for(let i=0; i<array.length; i++){
        const resultado = callback(array[i])
        if (comparacion == palabra){
            return resultados.push(resultado)
        }
    }
    return resultados;
    }

const arreglo =[naranja, zanahoria, platano, kiwi, melon, sandia];

function comparacion(zanahoria){
    return zanahoria
}
const resultados = filter(arreglo, comparacion);
console.log(resultados)


