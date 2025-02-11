// Importa la configuración de la conexión a la base de datos PostgreSQL.
const pool = require("../config/db");

const Book = {
  // Función para crear un nuevo libro
  create: async (name, isbn, status) => {
    // La consulta SQL para insertar un nuevo libro en la tabla 'books'
    const query = "INSERT INTO books (name, isbn, status) VALUES ($1, $2, $3) RETURNING *";
    
    // Valores a insertar en la consulta SQL
    const values = [name, isbn, status];
    
    // Ejecuta la consulta y obtiene el resultado
    const result = await pool.query(query, values);
    
    // Retorna el libro recién creado
    return result.rows[0];
  },

  // Función para obtener todos los libros
  getAll: async () => {
    // La consulta SQL para obtener todos los libros
    const query = "SELECT * FROM books";
    
    // Ejecuta la consulta y obtiene el resultado
    const result = await pool.query(query);
    
    // Retorna la lista de libros
    return result.rows;
  },

  // Función para obtener un libro por ID
  getById: async (id) => {
    // La consulta SQL para obtener un libro específico por su ID
    const query = "SELECT * FROM books WHERE id = $1";
    
    // Ejecuta la consulta y obtiene el resultado
    const result = await pool.query(query, [id]);
    
    // Retorna el libro encontrado
    return result.rows[0];
  },

  // Función para actualizar un libro
  update: async (id, name, isbn, status) => {
    // La consulta SQL para actualizar un libro por su ID
    const query =
      "UPDATE books SET name = $1, isbn = $2, status = $3 WHERE id = $4 RETURNING *";
    
    // Valores a actualizar en la consulta SQL
    const values = [name, isbn, status, id];
    
    // Ejecuta la consulta y obtiene el resultado
    const result = await pool.query(query, values);
    
    // Retorna el libro actualizado
    return result.rows[0];
  },

  // Función para eliminar un libro
  delete: async (id) => {
    // La consulta SQL para eliminar un libro por su ID
    const query = "DELETE FROM books WHERE id = $1";
    
    // Ejecuta la consulta para eliminar el libro
    await pool.query(query, [id]);
  },
};

// Exporta el objeto 'Book' que contiene las funciones CRUD
module.exports = Book;
