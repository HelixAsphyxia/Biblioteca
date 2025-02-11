// Importa las dependencias necesarias
const { Pool } = require("pg");  // Paquete para interactuar con bases de datos PostgreSQL.
const fs = require("fs");        // Módulo de Node.js para interactuar con el sistema de archivos.
const path = require("path");    // Módulo de Node.js para manejar rutas de archivos de manera segura.

require("dotenv").config();  // Carga las variables de entorno desde el archivo .env.

const pool = new Pool({
  // Configuración de la conexión con la base de datos PostgreSQL.

  // Usuario de la base de datos (definido en el archivo .env).
  user: process.env.DB_USER,  

  // Host de la base de datos (definido en el archivo .env, generalmente el endpoint de AWS RDS).
  host: process.env.DB_HOST,  

  // Nombre de la base de datos a la que se conecta.
  database: process.env.DB_NAME,  

  // Contraseña del usuario para la base de datos (definido en el archivo .env).
  password: process.env.DB_PASS,  

  // Puerto de la base de datos (por defecto PostgreSQL usa el puerto 5432).
  port: process.env.DB_PORT,  

  // Configuración de SSL para asegurar la conexión.
  ssl: {
    // Rechaza conexiones no autenticadas.
    rejectUnauthorized: true,  

    // Carga el certificado SSL necesario para la conexión segura a la base de datos.
    ca: fs.readFileSync(path.resolve(__dirname, "../us-east-2-bundle.pem")).toString(),
  },
});

// Exporta la instancia de 'pool' para que se pueda utilizar en otras partes de la aplicación.
module.exports = pool;
