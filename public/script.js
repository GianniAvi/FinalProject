// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/courses")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("course-list");
      data.forEach((course) => {
        const div = document.createElement("div");
        div.className = "course";
        div.innerHTML = `<h2>${course.name}</h2><p>${course.description}</p>`;
        container.appendChild(div);
      });
    })
    .catch((err) => console.error("Error al cargar cursos:", err));
});