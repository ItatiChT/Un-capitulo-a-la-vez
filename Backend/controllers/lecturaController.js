/*Importo el modelo lecturaModel, que es el encargado de leer y escribir los datos lecturas.json.
 LLamo y uso el modelo para responder al cliente.*/
const LecturaModel = require('../models/lecturaModel');

/*Pide al modelo todas las lectura y las transforma en .json. 
Se usa cuando se aplica GET, devuelve las lecturas guardadas*/ 
const getAllLecturas = (req, res) => {
  const lecturas = LecturaModel.findAll();
  res.json(lecturas);
};

/*Recibe los datos del body de la peticion, es decir, del POST*/ 
const createLectura = (req, res) => {
  const { title, author, relevance, notes } = req.body;
  
  /*Crea un objeto lectura nuevo*/
  const nuevaLectura = {
    id: Date.now(), // Genera un ID simple
    title,
    author,
    status: "pending", // Estado inicial por defecto
    relevance,
    notes,
    createdAt: new Date().toISOString()
  };

  /*guarda y devuelve la lectura creada*/ 
  const guardada = LecturaModel.create(nuevaLectura);
  res.status(201).json(guardada);
};

const updateLectura = (req, res) => {
  const id = req.params.id; // Obtenemos el ID de la URL
  const actualizada = LecturaModel.update(id, req.body);//Señalamos el libro identificado por el ID y actualizamos los datos enviados
  
  if (actualizada) {
    res.json(actualizada);
  } else {
    res.status(404).json({ message: "Lo lamentamos, lectura no encontrada en su librero" });
  }
};

const deleteLectura = (req, res) => {
  const id = req.params.id; //obtiene el ID desde el URL
  LecturaModel.delete(id);
  res.json({ message: "Lectura eliminada correctamente" }); //Elimina la lectura y envia mensaje de confirmacion.
  // no fijamos el caso en el que no exista
};
//exporta las funciones para que las rutas sean usadas
module.exports = { getAllLecturas, createLectura, updateLectura, deleteLectura };
