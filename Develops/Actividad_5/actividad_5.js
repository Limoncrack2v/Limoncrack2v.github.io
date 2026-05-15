import express from "express";
import path from "node:path";

const app = express();
const __dirname = import.meta.dirname;
const puerto = 1984;

// Carpeta donde están los archivos HTML, CSS, JS e imágenes
const carpetaPublic = path.join(__dirname, "public");

// express.static permite que Express sirva archivos estáticos automáticamente
app.use(express.static(carpetaPublic));

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "bienvenida.html"));
});

// Página de bienvenida
app.get("/bienvenida", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "bienvenida.html"));
});

// Página de perfil
app.get("/perfil", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "perfil.html"));
});

// Página de movimientos
app.get("/movimientos", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "movimientos.html"));
});

// Página de equipo
app.get("/equipo", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "equipo.html"));
});

// Página de usuarios
app.get("/usuarios", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "usuarios.html"));
});

// Página de opinión
app.get("/opinion", (req, res) => {
  res.sendFile(path.join(carpetaPublic, "opinion.html"));
});

// API de usuarios
app.get("/api/usuarios", (req, res) => {
  const usuarios = [
    {
      nombre: "Punk",
      saldo: "0"
    },
    {
      nombre: "Hugo",
      saldo: "100"
    }
  ];

  res.json(usuarios);
});

// API de movimientos
app.get("/api/movimientos", (req, res) => {
  const movimientos = [
    {
      prestamos: "3",
      cantidad_deb: "2000",
      plazos: "5"
    }
  ];

  res.json(movimientos);
});

// API de checkout
app.get("/api/checkout", (req, res) => {
  const checkout = [
    {
      prestamos_pendientes: "id_prestamo"
    }
  ];

  res.json(checkout);
});

// API de información del usuario
app.get("/api/user", (req, res) => {
  const userInfo = [
    {
      username: "id_user",
      saldo: "15000",
      estado: "Bueno",
      prestamos_activos: "10"
    }
  ];

  res.json(userInfo);
});

// API de autenticación
app.get("/api/autentificacion", (req, res) => {
  const autenticacion = [
    {
      username: "id_user",
      login: "true"
    }
  ];

  res.json(autenticacion);
});

// API de estado de morosidad
app.get("/api/estado_morasidad", (req, res) => {
  const morosidad = [
    {
      username: "id_user",
      morosidad: "false"
    }
  ];

  res.json(morosidad);
});

// API de saldo
app.get("/api/saldo", (req, res) => {
  const saldo = [
    {
      username: "id_user",
      saldo: "18000"
    }
  ];

  res.json(saldo);
});

// API de cashback
app.get("/api/cashback", (req, res) => {
  const cashback = [
    {
      username: "id_user",
      cashback: "1000"
    }
  ];

  res.json(cashback);
});

// Ruta 404
app.use((req, res) => {
  res.status(404).send("No está lo que buscas, pero quien busca encuentra.");
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});