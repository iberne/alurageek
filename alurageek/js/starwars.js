const productosStarwars=[
    {
        id : "taza",
        titulo : "Producto XYZ",
        imagen : "./img/unsplash_6FDXGY9J6y4.svg",
        precio : " $ 60,00",
        categoria : "starwars",
    },

    {
        id : "vader",
        titulo : "Producto XYZ",
        imagen : "./img/unsplash_epRFE_hBNjo.svg",
        precio : " $ 60,00",
        categoria : "starwars",
    },

    {
        id : "yoda",
        titulo : "Producto XYZ",
        imagen : "./img/unsplash_KeGToDVN0l4.svg",
        precio : " $ 60,00",
        categoria : "starwars",
    },

    {
        id : "trooper",
        titulo : "Producto XYZ",
        imagen : "./img/unsplash_4OHkK555s1A.svg",
        precio : " $ 60,00",
        categoria : "starwars",
    },

    {
        id : "muñeco",
        titulo : "Producto XYZ",
        imagen : "./img/unsplash_R8L1l9RN198.svg",
        precio : " $ 60,00",
        categoria : "starwars",
    },

    {
        id : "kylo",
        titulo : "Producto XYZ",
        imagen : "./img/unsplash_1VV1MRafd7A.svg",
        precio : " $ 60,00",
        categoria : "starwars",
    },
]

const contenedorproductos = document.querySelector ("#contenedor-starwars");

function cargarproductos() {
    productosStarwars.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("contenedor-starwars");
        div.innerHTML =
            
        `<img class= "producto-img" src="${producto.imagen}" alt=" ${producto.id}">
        <h2 class="descrip">${producto.titulo}</h2>
         <p class="precio">${producto.precio}</p>
         <a href="./productos.html" class="ver">ver producto</a>`; 

        contenedorproductos.append(div)    
    });
}

cargarproductos();