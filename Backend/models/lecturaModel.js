// Módulos para manejar archivos y rutas
const fs = require('fs');
const path = require('path');

// ruta al archivo donde se almacenan las lecturas
const filePath = path.join(__dirname, '../data/lecturas.json');

//creamos el objjeto donde guardamos los metodos 
const LecturaModel = {
  // 1. Devuelve todas las lecturas guardadas. lo usamos en GET

  findAll: () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  },

  // 2. Crea y guarda la nueva lectura
  create: (nuevaLectura) => {
    const lecturas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    lecturas.push(nuevaLectura);
    fs.writeFileSync(filePath, JSON.stringify(lecturas, null, 2));
    return nuevaLectura;
  },

  // 3. Actualiza una lectura existente
  update: (id, dataActualizada) => {
    let lecturas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const index = lecturas.findIndex(l => l.id == id);
    
    if (index !== -1) { //verifica que la lectura exista
      lecturas[index] = { ...lecturas[index], ...dataActualizada };
      fs.writeFileSync(filePath, JSON.stringify(lecturas, null, 2));
      return lecturas[index];
    }
    return null;//si no encuentra la lectura devuelve null
  },

  // 4. Elimina una lectura seleccionada por el ID ingresado
  delete: (id) => {
    let lecturas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const filtradas = lecturas.filter(l => l.id != id);
    fs.writeFileSync(filePath, JSON.stringify(filtradas, null, 2));
    return true;
  }
}; 

module.exports = LecturaModel;