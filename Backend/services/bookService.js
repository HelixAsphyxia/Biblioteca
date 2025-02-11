// Importa el paquete 'axios' para realizar solicitudes HTTP.
import axios from 'axios';

// Define la URL de la API del backend para interactuar con los libros.
const API_URL = 'http://localhost:5000/api/books'; // Cambiar con la URL de tu backend.

// Función para obtener todos los libros de la API
export const getBooks = async () => {
  try {
    // Realiza una solicitud GET a la URL de la API
    const response = await axios.get(API_URL);
    
    // Retorna los datos de la respuesta (lista de libros)
    return response.data;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error(error);
  }
};

// Función para agregar un nuevo libro a la API
export const addBook = async (bookData) => {
  try {
    // Realiza una solicitud POST a la URL de la API con los datos del libro
    const response = await axios.post(API_URL, bookData);
    
    // Retorna los datos de la respuesta (el libro recién creado)
    return response.data;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error(error);
  }
};
