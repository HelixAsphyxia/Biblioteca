import { StyleSheet } from "react-native";

// Estilos de la aplicación
export const styles = StyleSheet.create({
  // Estilos para la pantalla de inicio (Splash Screen)
  splashContainer: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    backgroundColor: "#E0F7FA", // Fondo azul pastel
  },
  logo: {
    width: 150, // Ancho del logo
    height: 150, // Alto del logo
    resizeMode: "contain", // Ajusta la imagen dentro del contenedor sin distorsionarla
    marginBottom: 20, // Espacio debajo del logo
  },
  logo2: {
    width: 400, // Ancho del logo
    height: 400, // Alto del logo
    resizeMode: "contain", // Ajusta la imagen dentro del contenedor sin distorsionarla
    marginBottom: 20, // Espacio debajo del logo
  },
  splashTitle: {
    fontSize: 28, // Tamaño de la fuente del título
    fontWeight: "bold", // Negrita para el título
    color: "#00796B", // Color oscuro para el contraste con el fondo
  },
  splashSubtitle: {
    fontSize: 16, // Tamaño de la fuente del subtítulo
    color: "#00796B", // Color oscuro para el contraste con el fondo
    marginTop: 10, // Espacio arriba del subtítulo
  },
  progressBarContainer: {
    width: "80%", // Ancho de la barra de progreso
    height: 10, // Alto de la barra de progreso
    backgroundColor: "#B2DFDB", // Color de fondo de la barra de progreso
    borderRadius: 5, // Esquinas redondeadas de la barra de progreso
    marginTop: 30, // Espacio arriba de la barra de progreso
    overflow: "hidden", // Asegura que la barra de progreso no se salga de los bordes
  },
  progressBar: {
    height: "100%", // La altura de la barra de progreso es el 100% del contenedor
    backgroundColor: "#00796B", // Color de la barra de progreso
  },

  // Estilos para la pantalla principal
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    padding: 20, // Espaciado alrededor de los elementos
    backgroundColor: "#E0F7FA", // Fondo azul pastel
  },
  header: {
    flexDirection: "row", // Distribuye los elementos en fila
    justifyContent: "space-between", // Espaciado entre los elementos
    alignItems: "center", // Alinea los elementos al centro verticalmente
    marginBottom: 20, // Espacio debajo del encabezado
  },
  title: {
    fontSize: 24, // Tamaño de la fuente del título
    fontWeight: "bold", // Negrita para el título
    color: "#00796B", // Color oscuro para el contraste con el fondo
  },
  searchInput: {
    borderWidth: 1, // Define el grosor del borde
    borderColor: "#B2DFDB", // Color del borde del campo de texto
    padding: 10, // Espaciado interno del campo de texto
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio debajo del campo de texto
    backgroundColor: "#FFFFFF", // Fondo blanco para el campo de texto
  },
  tableHeader: {
    flexDirection: "row", // Distribuye los elementos en fila
    backgroundColor: "#00796B", // Fondo verde oscuro
    padding: 10, // Espaciado alrededor de los elementos
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio debajo del encabezado de la tabla
  },
  headerText: {
    color: "#FFFFFF", // Color del texto blanco
    fontSize: 16, // Tamaño de la fuente
    fontWeight: "bold", // Negrita
    textAlign: "center", // Alineación central del texto
  },
  tableRow: {
    flexDirection: "row", // Distribuye los elementos en fila
    backgroundColor: "#FFFFFF", // Fondo blanco para cada fila
    padding: 10, // Espaciado alrededor de los elementos
    borderRadius: 5, // Bordes redondeados
    marginBottom: 5, // Espacio debajo de la fila
    alignItems: "center", // Alinea los elementos verticalmente
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 4, // Radio de la sombra
    elevation: 3, // Elevación de la sombra para dispositivos Android
  },
  rowText: {
    fontSize: 14, // Tamaño de la fuente
    color: "#333", // Color del texto
    textAlign: "center", // Alineación central del texto
  },
  actions: {
    flexDirection: "row", // Distribuye los botones en fila
    justifyContent: "space-around", // Espaciado entre los botones
  },
  editButton: {
    backgroundColor: "#4CAF50", // Fondo verde para el botón de editar
    padding: 5, // Espaciado interno del botón
    borderRadius: 5, // Bordes redondeados
  },
  deleteButton: {
    backgroundColor: "#F44336", // Fondo rojo para el botón de eliminar
    padding: 5, // Espaciado interno del botón
    borderRadius: 5, // Bordes redondeados
  },
  addButton: {
    backgroundColor: "#00796B", // Fondo verde oscuro para el botón de agregar
    padding: 15, // Espaciado interno del botón
    borderRadius: 10, // Bordes redondeados
    alignItems: "center", // Centra el contenido dentro del botón
    marginTop: 10, // Espacio arriba del botón
  },
  buttonText: {
    color: "#FFFFFF", // Color del texto blanco
    fontSize: 14, // Tamaño de la fuente
    fontWeight: "bold", // Negrita para el texto del botón
  },
  input: {
    borderWidth: 1, // Define el grosor del borde
    borderColor: "#B2DFDB", // Color del borde
    padding: 10, // Espaciado interno
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio debajo del campo de entrada
    backgroundColor: "#FFFFFF", // Fondo blanco
  },
  picker: {
    borderWidth: 1, // Define el grosor del borde
    borderColor: "#B2DFDB", // Color del borde
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio debajo del selector
    padding: 8, // Espaciado interno
    backgroundColor: "#FFFFFF", // Fondo blanco
  },

  // Estilos para la vista previa de la imagen del libro
  imagePickerButton: {
    backgroundColor: "#3b82f6", // Fondo azul para el botón de selección de imagen
    padding: 10, // Espaciado interno del botón
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio debajo del botón
    alignItems: "center", // Centra el contenido dentro del botón
  },
  previewImage: {
    width: 100, // Ancho de la imagen previa
    height: 150, // Alto de la imagen previa
    marginTop: 10, // Espacio arriba de la imagen
    alignSelf: "center", // Centra la imagen horizontalmente
    borderRadius: 5, // Bordes redondeados para la imagen
    borderWidth: 1, // Borde alrededor de la imagen
    borderColor: "#B2DFDB", // Color del borde
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  closeButton: {
    fontSize: 16,
    color: "#00796B",
    marginBottom: 10,
  },
  viewImageButton: {
    backgroundColor: "#00796B",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
