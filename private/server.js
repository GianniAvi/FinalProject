const express = require("express");
const app = express();
const db = require("./db");
const path = require("path");

app.use(express.static("public"));

app.get("/api/courses", async (req, res) => {
  const userId = req.query.userId;
  try {
    const result = await db.query(`
      SELECT c.title, c.description
      FROM user_courses uc
      JOIN courses c ON uc.course_id = c.id
      WHERE uc.user_id = $1
    `, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
