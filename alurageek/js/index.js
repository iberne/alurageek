document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector(".contacto");
   const nombreInput = document.getElementById("nombre");
   const mensajeInput = document.getElementById("mensaje");
   const enviarButton = document.getElementById("enviar");
 
   form.addEventListener("submit", function (event) {
     event.preventDefault(); 
 
     
     if (nombreInput.value.trim() === "") {
       alert("Por favor, ingrese su nombre.");
       return;
     }
 
     if (mensajeInput.value.trim() === "") {
       alert("Por favor, ingrese un mensaje. xd");
       return;
     }
 
     
     alert("Formulario enviado correctamente.");
     form.reset(); 
   });
 });

 document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const productos = document.querySelectorAll(".producto");

  searchButton.addEventListener("click", function () {
      filterProductos();
  });

  searchInput.addEventListener("input", function () {
      filterProductos();
  });

  function filterProductos() {
      const searchTerm = searchInput.value.toLowerCase();

      productos.forEach(function (producto) {
          const productName = producto.querySelector(".descrip").textContent.toLowerCase();

          if (productName.includes(searchTerm)) {
              producto.style.display = "block";
          } else {
              producto.style.display = "none";
          }
      });
  }
});


 document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    
    const isAuthenticated = true; 

    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
    } else if (!isAuthenticated) {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    } else {
      window.location.href = "./productos.html";
    }
  });
 });
 
 
