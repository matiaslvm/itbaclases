let count;
function cambiarTitulo () {
    count = prompt("ingrese su nombre: ")
    let header = document.getElementById("titulo");
    header.textContent = "Mi nombre es: " + count;
    console.log(header);
}


