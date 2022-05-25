function construir(muro, callback){
    console.log("construyendo....");

    setTimeout(()=>{
        muro.construido = true;
        callback(muro)
    }, 500)
}

function aplanar(muro, callback){
    console.log("aplanando....");

    setTimeout(()=>{
        muro.aplanado = true;
        callback(muro);
    }, 200)
}

function pintar(muro, callback){
    console.log("pintando....");

    setTimeout(()=>{
        muro.pintado = true;
        callback(muro);
    }, 100);
}

const muro ={
construido: false,
aplanado: false,
pintado: false,
};

construir(muro, (muroConstruido)=>{
    aplanar(muroConstruido, (muroAplanado)=>{
        pintar(muroAplanado, (muroPintado)={
        console.log("Muro terminado", muroPintado)
        });
    });
});

