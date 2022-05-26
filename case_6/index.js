function retirarDinero(cantidad){
    return new Promise((resolve, reject)=>{
        console.log("procesando su peticion");
        console.log(`la cantidad a retirar es: ${cantidad}`);

        if (cantidad < 1000){
            reject("solo puedo darte mas de $100")
        }
        resolve(`$${cantidad}.00`);
    });
}

const promesa2000= retirarDinero(2000);
promesa2000
.then((dinero)=>{
    console.log("El cajero me dió: ", dinero);
})
.catch((error)=>{
    console.error("El cajero falló, el error es", error);
});

// promesa de $10, la cual va a fallar

const promesa10=retirarDinero(10);
promesa10
.then((dinero)=>{
    console.log("El cajero me dió:", dinero);
});