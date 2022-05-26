function construir(muro){
    console.log("construyendo....");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            muro.construido = true;
            resolve(muro)
        }, 500);
    })
}

function aplanar(muro){
    console.log("aplanando....");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            muro.aplanado = true;
            resolve(muro);
        }, 200)
    });    
}

function pintar(muro){
    console.log("pintando....");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            muro.pintado = true;
            resolve(muro);
        }, 100);
    })
}


const muro ={
construido: false,
aplanado: false,
pintado: false,
};

const promesaConstruir = construir(muro);
promesaConstruir.then((muroConstruido)=>{
    console.log("Muro actualmente: ", muroConstruido);
    
    return aplanar(muroConstruido);
})

.then((muroAplanado)=>{
    console.log("Muro actualmente:", muroAplanado);

    return pintar(muroAplanado)
})

.then((muroPintado)=>{
    console.log("Muro en tercer then:", muroPintado);
    console.log("Terminamos el muro!")
});


async function ordenarConstruccion(){
    const muroConstruido = await construir(muro);
    const muroAplanado = await aplanar(muroConstruido);
    const muroPintado = await pintar(muroAplanado);

    console.log("Se terminó el muro!", muroPintado);
}

ordenarConstruccion();