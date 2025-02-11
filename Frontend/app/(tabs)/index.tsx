import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image, Animated} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { styles } from "./styles"; // Ruta del archivo styles.ts

const API_URL = "http://localhost:5000/api/books";

export default function App() {
  const [showSplash, setShowSplash] = useState(true); // Controla si se muestra la pantalla de inicio
  const [books, setBooks] = useState<{ id: number; name: string; isbn: string; status: string }[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<{ id: number; name: string; isbn: string; status: string }[]>([]);
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [status, setStatus] = useState("Disponible");
  const [editBookId, setEditBookId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  // Animación de la barra de carga
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showSplash) {
      // Animación de la barra de carga (5 segundos)
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }).start(() => {
        setShowSplash(false); // Ocultar la pantalla de inicio después de 5 segundos
      });
    }
  }, [showSplash]);

  // Obtener los libros al cargar la pantalla principal
  useEffect(() => {
    if (!showSplash) {
      fetchBooks();
    }
  }, [showSplash]);

  // Filtrar libros en función del término de búsqueda
  useEffect(() => {
    if (searchTerm) {
      const filtered = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books); // Si no hay término de búsqueda, mostrar todos los libros
    }
  }, [searchTerm, books]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
      setFilteredBooks(response.data); // Inicializar la lista filtrada con todos los libros
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  };

  const addBook = async () => {
    if (!name || !isbn) return alert("Todos los campos son obligatorios");
    try {
      await axios.post(API_URL, { name, isbn, status });
      setName("");
      setIsbn("");
      setStatus("Disponible"); // Reiniciar el estado
      fetchBooks();
    } catch (error) {
      console.error("Error al agregar el libro", error);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error al eliminar el libro", error);
    }
  };

  const updateBook = async () => {
    if (!editBookId || !name || !isbn) return alert("Todos los campos son obligatorios");
    try {
      await axios.put(`${API_URL}/${editBookId}`, { name, isbn, status });
      setEditBookId(null);
      setName("");
      setIsbn("");
      setStatus("Disponible"); // Reiniciar el estado
      fetchBooks();
    } catch (error) {
      console.error("Error al actualizar el libro", error);
    }
  };

  // Pantalla de inicio (Splash Screen)
  if (showSplash) {
    const progressWidth = progress.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    });

    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../../assets/logo.png")} // Ruta del logo
          style={styles.logo}
        />
        <Text style={styles.splashTitle}>Biblioteca Digital</Text>
        <Text style={styles.splashSubtitle}>Tu mundo de libros en un solo lugar</Text>

        {/* Barra de carga */}
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>
      </View>
    );
  }

  // Pantalla principal (Main Screen)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Libros</Text>
      </View>

      {/* Campo de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar libro por nombre..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Encabezados de la tabla */}
      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, { flex: 2 }]}>Nombre</Text>
        <Text style={[styles.headerText, { flex: 2 }]}>ISBN</Text>
        <Text style={[styles.headerText, { flex: 1.5 }]}>Estado</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Acciones</Text>
      </View>

      {/* Lista de libros en formato de tabla */}
      <FlatList
        data={filteredBooks} // Usar la lista filtrada
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={[styles.rowText, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.rowText, { flex: 2 }]}>{item.isbn}</Text>
            <Text style={[styles.rowText, { flex: 1.5 }]}>{item.status}</Text>
            <View style={[styles.actions, { flex: 1 }]}>
              <TouchableOpacity style={styles.editButton} onPress={() => {
                setEditBookId(item.id);
                setName(item.name);
                setIsbn(item.isbn);
                setStatus(item.status);
              }}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteBook(item.id)}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Inputs para agregar/editar libros */}
      <TextInput
        style={styles.input}
        placeholder="Nombre del libro"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ISBN"
        value={isbn}
        onChangeText={setIsbn}
      />
      {/* Selector de estado */}
      <Picker
        selectedValue={status}
        style={styles.picker}
        onValueChange={(itemValue: string) => setStatus(itemValue)}
      >
        <Picker.Item label="Disponible" value="Disponible" />
        <Picker.Item label="Prestado" value="Prestado" />
        <Picker.Item label="Reservado" value="Reservado" />
      </Picker>
      <TouchableOpacity style={styles.addButton} onPress={editBookId ? updateBook : addBook}>
        <Text style={styles.buttonText}>{editBookId ? "Actualizar Libro" : "Agregar Libro"}</Text>
      </TouchableOpacity>
    </View>
  );
}
