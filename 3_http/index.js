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

servel.patch("/koders/:nombre", async (req, res) => {
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


  // Guardar cambios
  const nuevoArchivo = JSON.stringify(objeto, null, 2); // Convertimos el objeto a un String nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(koders);
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
