// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// /**
//  * Filtra la matríz en función de un criterio de búsqueda (query)
//  */
// function filterItems(query) {
//   return fruits.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

// console.log(filterItems('an')); // ['apple', 'grapes']
// // console.log(filterItems('an')); // ['banana', 'mango', 'orange']

function filter(array, callback){
    const resultados =[];
    for (let i=0; i<array.length; i++){
        const resultado = callback(array[i])
        if(callback(array[i]<0)){
            resultados.push(resultado)
        }
    }
    return resultados
}

const arreglo = [5, 7, 6, 156, -8, -3, -20, -50];

function elemento(numero){
    return numero
}

//const resultados = filter(arreglo, elemento)
//console.log(resultados)


// Ejemplo:

// const inventario = [
//     {nombre: 'manzanas', cantidad: 2},
//     {nombre: 'bananas', cantidad: 0},
//     {nombre: 'cerezas', cantidad: 5}
// ];

// function esCereza(fruta) {
//     return fruta.nombre === 'cerezas';
// }

// console.log(inventario.find(esCereza));
// // { nombre: 'cerezas', cantidad: 5 }


function find(array, callback){
    const resultados =[];
    for (let i=0; i<array.length; i++){
        const resultado = callback(array[i])
        if(callback(array[i]==="limon")){
            resultadoFruta=[
                {
                    fruta: array[i].fruta,
                    cantidad: array[i].cantidad
                }
            ]
        }
        resultados.push(resultadoFruta)
    }
    return resultados
}

const arregloFrutas =[
    {
        fruta: "manzana",
        cantidad: 10,
    },
    {
        fruta: "limon",
        cantidad: 50,
    },
    {
        fruta: "naranja",
        cantidad: 5,
    },
    {
        fruta: "melones",
        cantidad: 3,
    }
    
]

function tipoFrutas(fruta){
return fruta
}

//const resultados=find(arregloFrutas, tipoFrutas)
//co0nsole.log(resultados)


//Every 


function every(array, callback){
    const resultadosEvery ="";
    for (let i=0; i<array.length; i++){
        const resultadoEvery = callback(array[i])
        if(callback(array[i]<0)){
            resultadosEvery == "True"
        }
        else{
            resultadosEvery =="False"
        }
    }
    return resultadosEvery
}

const arregloEvery = [-5, -7, -6, -156, -8, -3, -20, -50];

function elementoEvery(numeroEvery){
    return numeroEvery
}

const resultadosEvery = every(arregloEvery, elementoEvery)
console.log(resultadosEvery)






