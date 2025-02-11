// Importa el módulo 'express' para manejar las rutas de la API.
const express = require("express");

// Crea un router para gestionar las rutas de la API de libros.
const router = express.Router();

// Importa el controlador que contiene las funciones CRUD para los libros.
const bookController = require("../controllers/bookController");

// Rutas CRUD para los libros

// Ruta POST para crear un nuevo libro
// Asocia la ruta '/books' con la función 'createBook' del controlador.
router.post("/books", bookController.createBook);

// Ruta GET para obtener todos los libros
// Asocia la ruta '/books' con la función 'getAllBooks' del controlador.
router.get("/books", bookController.getAllBooks);

// Ruta GET para obtener un libro por su ID
// La ruta '/books/:id' permite obtener un libro específico utilizando el ID proporcionado en la URL.
// Asocia la ruta con la función 'getBookById' del controlador.
router.get("/books/:id", bookController.getBookById);

// Ruta PUT para actualizar un libro por su ID
// La ruta '/books/:id' permite actualizar un libro específico utilizando el ID proporcionado en la URL.
// Asocia la ruta con la función 'updateBook' del controlador.
router.put("/books/:id", bookController.updateBook);

// Ruta DELETE para eliminar un libro por su ID
// La ruta '/books/:id' permite eliminar un libro específico utilizando el ID proporcionado en la URL.
// Asocia la ruta con la función 'deleteBook' del controlador.
router.delete("/books/:id", bookController.deleteBook); // Nueva ruta para eliminar

// Exporta el router para que se pueda utilizar en el archivo principal de la aplicación (por ejemplo, 'index.js').
module.exports = router;
