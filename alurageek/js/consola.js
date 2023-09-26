const consolas=[
    {
        id : "mando",
        titulo : "Control XYZ",
        imagen : "./img/unsplash_0POwK6iAiRQ.svg",
        precio : " $ 60,00",
        categoria : "consola",
    },

    {
        id : "mando y consola",
        titulo : "Control y consola XYZ",
        imagen : "./img/unsplash_caNzzoxls8Q.svg",
        precio : " $ 60,00",
        categoria : "consola",
    },

    {
        id : "consola",
        titulo : "Consola XYZ",
        imagen : "./img/unsplash_MxVkWPiJALs.svg",
        precio : " $ 60,00",
        categoria : "consola",
    },

    {
        id : "mando",
        titulo : "Control XYZ",
        imagen : "./img/unsplash_wa5z9o9fgjw.svg",
        precio : " $ 60,00",
        categoria : "consola",
    },

    {
        id : "mando",
        titulo : "Control XYZ",
        imagen : "./img/unsplash_Zjn4dT993-g.svg",
        precio : " $ 60,00",
        categoria : "consola",
    },

    {
        id : "game boy",
        titulo : "Game Boy Color",
        imagen : "./img/unsplash_k-xYhI3-gJM.svg",
        precio : " $ 60,00",
        categoria : "consola",
    },

]


const contenedorconsolas = document.querySelector ("#contenedor-consola");

function cargarconsolas() {
    consolas.forEach(consola => {
        
        const div = document.createElement("div");
        div.classList.add("contenedor-consola");
        div.innerHTML =
            
        `<img class= "producto-img" src="${consola.imagen}" alt=" ${consola.id}">
        <h2 class="descrip">${consola.titulo}</h2>
         <p class="precio">${consola.precio}</p>
         <a href="./productos.html" class="ver">ver producto</a>`; 

        contenedorconsolas.append(div)    
    });
}

cargarconsolas();