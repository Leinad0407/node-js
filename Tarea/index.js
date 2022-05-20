const arregloPrueba=[];
let otroNumero=""
do {
    let ingresoNumero=Number(prompt("Ingrese un número"))
    arregloPrueba.push(ingresoNumero)
    console.log(arregloPrueba)
    otroNumero = prompt("Si quiere agregar otro numero escriba: si")


} while (otroNumero == "si");

let primerNumero=0;
let segundoNumero=0;

function comparacion(arreglo){
  
    arreglo.forEach((primeraIteracion)=>{
        let primerNumero=primeraIteracion;
        arreglo.forEach((segundaIteracion)=>{
            let segundoNumero = segundaIteracion;
            if(primerNumero>segundoNumero){
              resultado = `El ${primerNumero} es el mayor de todos`
            }
    
        })
    
    })
    return resultado
}
let mayor = comparacion(arregloPrueba)
console.log(mayor)

