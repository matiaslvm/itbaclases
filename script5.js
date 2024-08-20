let count = 0;

function cambiarTitulo() {
    let nombre = prompt("ingrese su nombre: ");
    let header = document.getElementById("titulo");
    header.textContent = "Mi nombre es: " + nombre;
    console.log(header);
}    

function agregarItem() {
    count++;
    let lista = document.getElementById("milista");
    let elementoLista = document.createElement("li");
    elementoLista.textContent = count;
    lista.appendChild(elementoLista);
}

function borrarItem() {
    let lista = document.getElementById("milista");
    console.log(lista.childNodes); 
    console.log(lista.childNodes.length);
    let ultimoElemento = lista.childNodes[lista.childNodes.length - 1];   
    lista.removeChild(ultimoElemento);
    count--;
}

// ARREGLOS

let lista = [1, 2, "3", "Hola", ["a", "b"], (a, b) => { return a + b }, null];

console.log(lista);
lista.push(15);
console.log(lista);
let x = lista.pop();
console.log({ lista, x });
console.log(lista[5](3, 4));

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

for(let elemento of lista) {
    console.log(elemento);
}

function recorrerEImprimir (elemento) {
    console.log(elemento);
}

lista.forEach(recorrerEImprimir);
lista.forEach((elemento, indice) => (console.log((indice, elemento))));


// OBJETOS
let obj = {
    "str": "value",
    "int": 0,
    "float": 1.2,
    "func": (a, b) => {return a+b},
    "arr": [1.2,3],
    "obj":{
        "key": "value"
    }
}
console.log(obj.str)
console.log(obj.func(3,5));
console.log(obj.key);
console.log(obj ["key"]);

