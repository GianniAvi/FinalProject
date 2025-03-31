// server.js
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public")); // para servir archivos HTML, CSS, JS

// Configura tu conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "RoboticProject",
  password: "Postgre",
  port: 5432,
});

// Ruta para obtener los cursos
app.get("/api/courses", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM courses");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});