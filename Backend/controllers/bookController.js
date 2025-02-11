// Importa el modelo de Book para interactuar con la base de datos.
const Book = require("../models/bookModel");

// Crear un nuevo libro
// Esta función se encarga de crear un nuevo libro en la base de datos.
const createBook = async (req, res) => {
  try {
    // Desestructura los datos del cuerpo de la solicitud (req.body)
    const { name, isbn, status } = req.body;

    // Valida que todos los campos sean proporcionados
    if (!name || !isbn || !status) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Llama a la función 'create' del modelo 'Book' para insertar el nuevo libro
    const newBook = await Book.create(name, isbn, status);

    // Devuelve una respuesta con el libro recién creado
    res.status(201).json(newBook);
  } catch (error) {
    // Maneja los errores, si ocurre algún problema en la creación
    res.status(500).json({ message: "Error al registrar el libro", error: error.message });
  }
};

// Obtener todos los libros
// Esta función obtiene todos los libros de la base de datos.
const getAllBooks = async (req, res) => {
  try {
    // Llama a la función 'getAll' del modelo 'Book' para obtener todos los libros
    const books = await Book.getAll();

    // Devuelve una respuesta con todos los libros obtenidos
    res.status(200).json(books);
  } catch (error) {
    // Maneja los errores, si ocurre algún problema al obtener los libros
    res.status(500).json({ message: "Error al obtener los libros", error: error.message });
  }
};

// Obtener un libro por ID
// Esta función obtiene un libro de la base de datos según el ID proporcionado en la URL.
const getBookById = async (req, res) => {
  try {
    // Obtiene el ID del libro desde los parámetros de la solicitud
    const { id } = req.params;

    // Llama a la función 'getById' del modelo 'Book' para obtener el libro por ID
    const book = await Book.getById(id);

    // Si no se encuentra el libro, devuelve un error 404
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    // Devuelve la información del libro
    res.status(200).json(book);
  } catch (error) {
    // Maneja los errores, si ocurre algún problema al obtener el libro
    res.status(500).json({ message: "Error al obtener el libro", error: error.message });
  }
};

// Actualizar un libro
// Esta función actualiza los datos de un libro en la base de datos.
const updateBook = async (req, res) => {
  try {
    // Obtiene el ID del libro desde los parámetros de la solicitud
    const { id } = req.params;

    // Desestructura los datos del cuerpo de la solicitud (req.body)
    const { name, isbn, status } = req.body;

    // Llama a la función 'update' del modelo 'Book' para actualizar el libro
    const updatedBook = await Book.update(id, name, isbn, status);

    // Si no se encuentra el libro, devuelve un error 404
    if (!updatedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    // Devuelve una respuesta con el libro actualizado
    res.status(200).json({ message: "Libro actualizado con éxito", updatedBook });
  } catch (error) {
    // Maneja los errores, si ocurre algún problema al actualizar el libro
    res.status(500).json({ message: "Error al actualizar el libro", error: error.message });
  }
};

// Eliminar un libro
// Esta función elimina un libro de la base de datos según el ID proporcionado en la URL.
const deleteBook = async (req, res) => {
  try {
    // Obtiene el ID del libro desde los parámetros de la solicitud
    const { id } = req.params;

    // Llama a la función 'delete' del modelo 'Book' para eliminar el libro
    await Book.delete(id);

    // Devuelve una respuesta indicando que el libro ha sido eliminado
    res.status(200).json({ message: "Libro eliminado con éxito" });
  } catch (error) {
    // Maneja los errores, si ocurre algún problema al eliminar el libro
    res.status(500).json({ message: "Error al eliminar el libro", error: error.message });
  }
};

// Exporta las funciones como parte del módulo
module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
