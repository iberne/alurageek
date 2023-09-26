const diversos=[
    {
        id : "Camisa Atari",
        titulo : "Camisa Atari",
        imagen : "./img/unsplash_fMP-oCze3AY.svg",
        precio : " $ 60,00",
        categoria : "diversos",
    },

    {
        id : "Camisa SNES",
        titulo : "Camisa SNES",
        imagen : "./img/unsplash_bUgaIaZysH0.svg",
        precio : " $ 60,00",
        categoria : "diversos",
    },

    {
        id : "Control y consola",
        titulo : "Control y consola XYZ",
        imagen : "./img/unsplash_sYVY_ZKwaxU.svg",
        precio : " $ 60,00",
        categoria : "diversos",
    },

    {
        id : "Control y consola",
        titulo : "Control y consola XYZ",
        imagen : "./img/unsplash_jMT6BrgBuXU.svg",
        precio : " $ 60,00",
        categoria : "diversos",
    },

    {
        id : "Control y consola XYZ",
        titulo : "Control y consola XYZ",
        imagen : "./img/unsplash_MxVkWPiJALs.svg",
        precio : " $ 60,00",
        categoria : "diversos",
    },

    {
        id : "pikachu",
        titulo : "pikachu",
        imagen : "./img/unsplash_r27umXAelDc.svg",
        precio : " $ 60,00",
        categoria : "diversos",
    },

]


const contenedordiversos = document.querySelector ("#contenedor-diversos");

function cargardiversos() {
    diversos.forEach(diverso => {
        
        const div = document.createElement("div");
        div.classList.add("contenedor-diversos");
        div.innerHTML =
            
        `<img class= "producto-img" src="${diverso.imagen}" alt=" ${diverso.id}">
        <h2 class="descrip">${diverso.titulo}</h2>
         <p class="precio">${diverso.precio}</p>
         <a href="./productos.html" class="ver">ver producto</a>`; 

        contenedordiversos.append(div)    
    });
}

cargardiversos();
