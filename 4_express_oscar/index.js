const express = require("express");
const fs = require("fs/promises");

const PORT=8000;

const server = express();

// middleware para convertir request a JSON
server.use(express.json());

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.get("/koders", async (req, res) => {
  const koders = await readKoders(); // accedemos solo a los koders que estan en un arreglo

  const edad = parseInt(req.query.edad) ; // accedemo a parametros 
  const count = parseInt(req.query.count) ;

  /*
  [10, 10, 20, 20, 20, 10]

  edad = 20 & count = 4

  [10, 10, 20, 20]
  [20, 20]

  //Si aplicamos edad primero 

  [20, 20, 20, 20]
  [20, 20, 20, 20]

  */
 let respuesta = koders
  if(!Number.isNaN(edad)){
    respuesta = koders.filter((koder)=>koder.edad===edad); //todos los koders que tengan la edad buscada

  }

  if (!Number.isNaN(count)){
    respuesta = respuesta.slice(0, count)
  }

  res.json(respuesta);
});

server.post("/koders", async (req, res) => {
  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const koder = req.body;

  // Cargar Koders
  const koders = await readKoders(); // accedemos solo a los koders que estan en un arreglo

  // Agregar un nuevo Koder
  koders.push(koder);

  // Guardar cambios
  await writeKoders({ koders });

  // Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(koders);
});

server.patch("/koders/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const newKoder = req.body;

  // Cargar Koders
  const koders = await readKoders();

  // TODO: Buscar y actualizar al Koder cuyo koder.nombre sea igual a nombre
  for (let i = 0; i < koders.length; i++) {
    const oldKoder = koders[i];

    if (oldKoder.nombre === nombre) {
      oldKoder.edad = newKoder.edad;
      oldKoder.genero = newKoder.genero;
    }
  }

  // Guardar cambios, envolviendo el arreglo koders en un objeto
  await writeKoders({ koders });

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(koders);
});

server.delete("/koders/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Cargar Koders
  const koders = await readKoders();

  // Voy a eliminar al Koder que se llame como la constante nombre
  const newKoders = koders.filter((koder) => koder.nombre !== nombre);
  console.log(newKoders);

  const newObject = {
    koders: newKoders,
  };

  // Guardar cambios
  await writeKoders(newObject);

  // Enviamos respuesta
  res.status(200); // Estado de creado
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

async function readKoders() {
  const archivo = await fs.readFile("koders.json", "utf8"); // el archivo es un String
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  return koders;
}

async function writeKoders(newObject) {
  const nuevoArchivo = JSON.stringify(newObject, null, 2); // Convertimos el objeto a un String nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");
}
