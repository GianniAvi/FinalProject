// Simulamos que el usuario ya hizo login
const userId = 1;

fetch(`/api/courses?userId=${userId}`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("course-list");
    data.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error al cargar los cursos:", err));
