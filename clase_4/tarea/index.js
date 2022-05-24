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

const resultados = filter(arreglo, elemento)
  console.log(resultados)


