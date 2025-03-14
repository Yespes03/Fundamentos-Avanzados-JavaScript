/*-----------------------------------------------
  TÍTULO: Funciones en JavaScript
 --------------------------------------------*/
alert("===== Funciones en JavaScript =====");

// 1. Funciones Declarativas
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
alert(saludar("Alejo")); 

// 2. Funciones Anónimas
const saludarAnonimo = function(nombre) {
    return `Yepes, ${nombre}!`;
};
alert(saludarAnonimo("vargas")); 

// 3. Funciones Flecha (Arrow Functions)
const saludarFlecha = (nombre) => `Hola, ${nombre}!`;
alert(saludarFlecha("Alejandro")); 

// 4. Funciones con Parámetros por Defecto
function saludarDefecto(nombre = "uwu") {
    return `Hola, ${nombre}!`;
}
alert(saludarDefecto()); 

// 5. Funciones que Retornan Otras Funciones
function crearSaludo(saludo) {
    return function(nombre) {
        return `${saludo}, ${nombre}!`;
    };
}
const saludarPersonalizado = crearSaludo("Hola");
alert(saludarPersonalizado("yepes")); 

/*---------------------------------------------
 * TÍTULO: Arreglos en JavaScript
----------------------------------------------*/
alert("===== Arreglos en JavaScript =====");

// 1. Creación de un arreglo
const paises = ["Holanda", "Colombia", "Italia"];
alert(`Arreglo de países: ${paises.join(", ")}`); 

// 2. Acceso a elementos del arreglo
alert(`Primer país: ${paises[0]}`); 

// 3. push(): Añade un elemento al final del arreglo
paises.push("Ecuador");
alert(`Arreglo después de push: ${paises.join(", ")}`); 

// 4. pop(): Elimina y devuelve el último elemento
const ultimoPais = paises.pop();
alert(`Último país eliminado: ${ultimoPais}`);
alert(`Arreglo después de pop: ${paises.join(", ")}`); 

// 5. shift(): Elimina y devuelve el primer elemento
const primerPais = paises.shift();
alert(`Primer país eliminado: ${primerPais}`); 
alert(`Arreglo después de shift: ${paises.join(", ")}`); 

// 6. unshift(): Añade un elemento al inicio
paises.unshift("Rusia");
alert(`Arreglo después de un shift: ${paises.join(", ")}`); 

// 7. map(): Crea un nuevo arreglo aplicando una función
const numeros = [1, 2, 3];
const duplicados = numeros.map(num => num * 2);
alert(`Arreglo duplicado: ${duplicados.join(", ")}`); // Muestra: 2, 4, 6

// 8. filter(): Filtra elementos que cumplan una condición
const pares = numeros.filter(num => num % 2 === 0);
alert(`Números pares: ${pares.join(", ")}`); // Muestra: 2

// 9. reduce(): Reduce el arreglo a un solo valor
const suma = numeros.reduce((acc, num) => acc + num, 0);
alert(`Suma de los números: ${suma}`); // muestra 6

/**********************************************
 * TÍTULO: Programación Orientada a Objetos (POO)
 **********************************************/
alert("===== Programación Orientada a Objetos (POO) =====");

// 1. Definición de una clase
class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }
    hacerSonido() {
        alert(`${this.nombre} hace ${this.sonido}`);
    }
}

// 2. Creación de una instancia de la clase
const perro = new Animal("pato", "cuak");
perro.hacerSonido(); // Muestra: Perro hace Guau

// 3. Herencia
class Perro extends Animal {
    constructor(nombre) {
        super(nombre, "cuak");
    }
}
const miPerro = new Perro("Rex");
miPerro.hacerSonido(); // Muestra: Rex hace Guau

/**********************************************
  TÍTULO: Manejo de Eventos y el DOM
 **********************************************/
alert("===== Manejo de Eventos y el DOM =====");

// 1. Selección de un elemento del DOM
const contenedor = document.querySelector("#contenedor");

// 2. Cambiar contenido del DOM automáticamente
contenedor.innerHTML = "<p>Nuevo contenido añadido automáticamente</p>";
alert("El contenido del DOM ha sido modificado");

/**********************************************
 TÍTULO: Módulos en JavaScript
 **********************************************/
alert("===== Módulos en JavaScript =====");

// 1. Exportación de una función (archivo: funciones.js)
// export function saludar(nombre) {
//     return `Hola, ${yepes}!`;
// }

// 2. Importación de la función (archivo: main.js)
// import { saludar } from './funciones.js';
// alert(saludar("Yepes")); 

/**********************************************
 TÍTULO: Programación Asíncrona
 **********************************************/
alert("===== Programación Asíncrona =====");

// 1. Promesas
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
esperar(2000).then(() => {
    alert("Han pasado 2 segundos");
});

// 2. Async/Await
async function ejecutar() {
    alert("Iniciando...");
    await esperar(3000);
    alert("Finalizado después de 3 segundos");
}
ejecutar();