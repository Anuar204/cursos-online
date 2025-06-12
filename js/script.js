/js/script.js
// Array para almacenar los cursos agregados al carrito
let carrito = [];

// Función para agregar cursos al carrito
function agregarAlCarrito(curso, precio) {
  carrito.push({ curso, precio });
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito en pantalla
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");

  // Limpiar lista antes de volver a renderizar
  lista.innerHTML = "";
  let suma = 0;

  // Recorrer los elementos del carrito
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Contenido del item con botón de eliminar
    li.innerHTML = `
      ${item.curso} - $${item.precio}
      <button class="btn btn-sm btn-danger" onclick="eliminarItem(${index})">Eliminar</button>
    `;

    lista.appendChild(li);
    suma += item.precio;
  });

  // Mostrar el total actualizado
  total.textContent = suma;
}

// Función para eliminar un curso del carrito por su índice
function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}
