const mongoose = require('mongoose');
const DB_USER = 'Leinad'
const DB_PASSWORD = 'leinadmir0407chopin'
const URL = "mongodb+srv://Leinad:<password>@cluster0.w8tpk.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(URL).then((connection)=>{
    console.log("Estamos conectados a la BD");
})
.catch((error)=>{
    console.error('No nos conectamos a la BD');
    console.error(error);
});

