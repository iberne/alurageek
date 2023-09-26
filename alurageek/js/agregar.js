
document.addEventListener("DOMContentLoaded", function () {
  const agregarProductoForm = document.getElementById("agregar-producto-form");
  const contenedorProductos = document.getElementById("contenedor-productos");

  
  agregarProductoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const imagen = document.getElementById("imagen").value;
    const categoria = document.getElementById("categoria").value;
    const productoNombre = document.getElementById("producto-nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcionProducto = document.getElementById("descripcion-producto").value;

    if (
      imagen.trim() === "" ||
      categoria.trim() === "" ||
      productoNombre.trim() === "" ||
      precio.trim() === "" ||
      descripcionProducto.trim() === ""
    ) {
      alert("Complete todos los campos.");
    } else {
     
      alert("Producto agregado con éxito.");
      agregarProductoForm.reset();
    }
  });

 
  function cargarProductos() {
    productosStarwars.forEach((producto) => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("producto");

      divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.id}">
        <h2>${producto.titulo}</h2>
        <p>Categoría: ${producto.categoria}</p>
        <p>Precio: ${producto.precio}</p>
      `;

      contenedorProductos.appendChild(divProducto);
    });
  }

  
  cargarProductos();
});

