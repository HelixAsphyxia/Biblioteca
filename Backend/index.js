// Carga las variables de entorno desde el archivo .env
require("dotenv").config();

// Importa las dependencias necesarias para el backend
const express = require("express"); // Framework para crear aplicaciones web y API
const cors = require("cors"); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
const pool = require("./config/db"); // Conexión con la base de datos PostgreSQL

// Crea una instancia de la aplicación express
const app = express();

// Configura los middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Necesario para poder recibir datos en formato JSON

// Ruta de prueba para verificar la conexión con la base de datos PostgreSQL
app.get("/test-db", async (req, res) => {
  try {
    // Ejecuta una consulta simple para verificar la conexión
    const result = await pool.query("SELECT NOW()");
    
    // Responde con un mensaje y la hora actual de la base de datos
    res.json({ message: "Conexión exitosa a PostgreSQL", time: result.rows[0] });
  } catch (error) {
    // Si hay un error, responde con un mensaje de error
    res.status(500).json({ error: "Error conectando a PostgreSQL", details: error.message });
  }
});

// Ruta para agregar un nuevo libro (sin imagen)
app.post("/api/books", async (req, res) => {
  const { name, isbn, status } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO books (name, isbn, status) VALUES ($1, $2, $3) RETURNING *",
      [name, isbn, status]
    );
    res.json(result.rows[0]); // Devolvemos el libro agregado
  } catch (error) {
    console.error("Error al agregar el libro", error);
    res.status(500).json({ error: "Error al agregar el libro" });
  }
});

// Ruta para obtener todos los libros
app.get("/api/books", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows); // Devuelve todos los libros
  } catch (error) {
    console.error("Error al obtener los libros", error);
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// Monta las rutas de libros en el endpoint '/api'
const bookRoutes = require("./routes/bookRoutes"); // Asegúrate de tener tus rutas de libros en bookRoutes
app.use("/api", bookRoutes);

// Establece el puerto en el que el servidor escuchará (por defecto 5000 si no está configurado en el archivo .env)
const PORT = process.env.PORT || 5000;

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
