const img2 = document.querySelector(".img2");
const info2 = document.querySelector(".card2");
const fondo2 = document.querySelector(".fondo2")
const close = document.querySelector(".flechita-atras2");

img2.addEventListener("click",abrirInfo2)
close.addEventListener("click",cerrarInfo2)

function abrirInfo2(){
    info2.classList.toggle("inactive")
    fondo2.classList.add("blur")
}
function cerrarInfo2(){
    info2.classList.add("inactive")
    fondo2.classList.toggle("blur")
}