// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

// Llamamos la referencia de input y div
const input = document.querySelector('input');
const li = document.getElementById("lista-de-productos");

//Cambiamos todos los var por let
function displayProductos(productosArray) {
  li.innerHTML = "";
  for (let i = 0; i < productosArray.length; i++) {

    let div = document.createElement("div")
    div.classList.add("producto")

    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productos[i].nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    div.appendChild(titulo)
    div.appendChild(imagen)
    li.appendChild(div)
  }
}


  const botonDeFiltro = document.querySelector("button");

  botonDeFiltro.onclick = function () {
    
    li.innerHTML = "";
    filterProducts();
  
  }
// Creamos metodo para filtrar productos 
  function filterProducts(){
    const texto = (input.value).toLowerCase();

    const productosFiltrados = filtrado(productos, texto);
    console.log(productosFiltrados);

    for (let i = 0; i < productosFiltrados.length; i++) {
      let div = document.createElement("div")
      div.classList.add("producto")

      let titulo = document.createElement("p")
      titulo.classList.add("titulo")
      titulo.textContent = productosFiltrados[i].nombre;

      let imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);

      div.appendChild(titulo);
      div.appendChild(imagen);
      li.appendChild(div);
    }
  }

// Cambiamos funcion flecha a funcion declarada 
  function filtrado (productos = [], texto){
     
     return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }



