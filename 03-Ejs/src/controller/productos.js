//importo librerias a utilizar
const { v4: uuidv4 } = require('uuid');

class Productos {
  constructor() {
    this.productos = [
      { id:uuidv4(), nombre: 'Mermelada de Ciruela', categoria: 'Mermeladas', precio: 580, foto: 'http://localhost:8080/fotos/ciruela.jpg'},
      { id:uuidv4(), nombre: 'Aceite Oliva 1L', categoria: 'Aceites', precio: 1600, foto: 'http://localhost:8080/fotos/oliva.jpg'},
      { id:uuidv4(), nombre: 'Pasta Aceitunas Verdes', categoria: 'Aceitunas', precio: 500, foto: 'http://localhost:8080/fotos/pasta.jpg'}, 
      { id:uuidv4(), nombre: 'Cereza en Ambibar', categoria: 'Almíbar', precio: 800, foto: 'http://localhost:8080/fotos/cereza.jpg'}, 
      { id:uuidv4(), nombre: 'Antipasto Vegetal', categoria: 'Conservas', precio: 800, foto: 'http://localhost:8080/fotos/antipasto.jpg'}     
    ];
  }

  getAll() {
    return this.productos;
  }

  save(data) {
    const nuevoProducto = {
      id: uuidv4(),
      nombre: data.nombre,
      categoria: data.categoria,
      precio: data.precio,
      foto: data.foto
    };
    this.productos.push(nuevoProducto);
  }
}

const productosController = new Productos();

module.exports = productosController
