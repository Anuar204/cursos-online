const cursos = [
  { id: 1, nombre: "Inteligencia Artificial", precio: 100, imagen: "../img/inteligencia-artificial.webp", categoria: "Tecnología" },
  { id: 2, nombre: "Base de Datos", precio: 80, imagen: "../img/base-de-datos.webp", categoria: "Tecnología" },
  { id: 3, nombre: "Programación Java", precio: 90, imagen: "../img/java.webp", categoria: "Tecnología" },
  { id: 4, nombre: "Microsoft Office", precio: 70, imagen: "../img/oficina.webp", categoria: "Ofimática" }
];


const carrito = [];

// ========== FUNCIONES ==========

function cargarCursos() {
  const contenedor = document.getElementById("contenedor-cursos");
  cursos.forEach(curso => {
    const card = document.createElement("div");
    card.classList.add("col-md-3");
    card.innerHTML = `
      <div class="card mb-4">
        <img src="${curso.imagen}" class="card-img-top" alt="Curso de ${curso.nombre}">
        <div class="card-body">
          <h5 class="card-title">${curso.nombre}</h5>
          <p class="card-text">Precio: $${curso.precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarrito(id) {
  const curso = cursos.find(curso => curso.id === id);
  if (curso) {
    carrito.push(curso);
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total-carrito");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((curso, index) => {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    item.innerHTML = `
      ${curso.nombre} - $${curso.precio}
      <button class="btn btn-sm btn-danger float-end" onclick="eliminarCurso(${index})">X</button>
    `;
    lista.appendChild(item);
    suma += curso.precio;
  });

  total.textContent = suma;
}

function eliminarCurso(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", cargarCursos);


const carrito = [];

// ========== FUNCIONES ==========

// Renderizar los cursos en pantalla
function cargarCursos() {
  const contenedor = document.getElementById("contenedor-cursos");
  cursos.forEach(curso => {
    const card = document.createElement("div");
    card.classList.add("col-md-3");
    card.innerHTML = `
      <div class="card mb-4">
        <img src="${curso.imagen}" class="card-img-top" alt="Curso de ${curso.nombre}">
        <div class="card-body">
          <h5 class="card-title">${curso.nombre}</h5>
          <p class="card-text">Precio: $${curso.precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Agregar un curso al carrito
function agregarAlCarrito(id) {
  const curso = cursos.find(curso => curso.id === id);
  if (curso) {
    carrito.push(curso);
    actualizarCarrito();
  }
}

// Actualizar visualmente el carrito
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total-carrito");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((curso, index) => {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    item.innerHTML = `
      ${curso.nombre} - $${curso.precio}
      <button class="btn btn-sm btn-danger float-end" onclick="eliminarCurso(${index})">X</button>
    `;
    lista.appendChild(item);
    suma += curso.precio;
  });

  total.textContent = suma;
}

// Eliminar curso del carrito por índice
function eliminarCurso(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// ========== INICIALIZACIÓN ==========
document.addEventListener("DOMContentLoaded", cargarCursos);
