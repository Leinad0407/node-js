const express = require("express");
const fs = require("fs/promises");

const server = express();

// middleware para convertir request a JSON
server.use(express.json());

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.get("/koders", async (req, res) => {
  const archivo = await fs.readFile("koders.json", "utf8"); // el archivo es un String
  console.log(archivo);
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  console.log(objeto);
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  res.json(koders);
});

server.post("/koders", async (req, res) => {
  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const koder = req.body;

  // Cargar Koders
  const archivo = await fs.readFile("koders.json", "utf8"); // el archivo es un String
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  // Agregar un nuevo Koder
  koders.push(koder);

  // Guardar cambios
  const nuevoArchivo = JSON.stringify(objeto, null, 2); // Convertimos el objeto a un String nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  // Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(koders);
});

server.patch("/koders/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const koder = req.body;

  // Cargar Koders
  const archivo = await fs.readFile("koders.json", "utf8"); // el archivo es un String
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  // TODO: Buscar y actualizar al Koder cuyo koder.nombre sea igual a nombre
const newKoders = koders.map((oldKoder)=>{
  if (oldKoder.nombre===nombre){
    return newKoders;
  }
  return oldKoder;
});
const newObject = {
  koders: newKoders,
};
  // Guardar cambios
  const nuevoArchivo = JSON.stringify(objeto, null, 2); // Convertimos el objeto a un String nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(koders);
});

server.get("/koders/:nombre", async(req, res)={
  
})


server.delete("/koders/:nombre", async(req, res) = {
  const nombre = req.params.nombre;

  const archivo = await fs.readFile("koders.json", "utf8");
  const objeto = JSON.parse(archivo);
  const koders = objeto.koders;

  const newKoders= koders.filter((koder)=> koder.nombre != nombre);
  console.log(newKoders);

  const newObject = {
    koders: newKoders,
  };

  const nuevoArchivo =JSON.stringify(newObject, null, 2);
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  res.status(200);
  res.json(newKoders);
});

server.get("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui estan todos los koders",
  };

  res.json(respuesta);
});

server.post("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes crear koders",
  };

  res.json(respuesta);
});

server.put("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes sustituir un koder",
  };

  res.json(respuesta);
});

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
});
