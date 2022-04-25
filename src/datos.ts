//Written by: Ivan Vaquero;
//Title: Clase2Carla;
//Declarations of variables;

let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let btnEnviar4 = <HTMLButtonElement>document.getElementById("btnEnviar4");
let btnEnviar5 = <HTMLButtonElement>document.getElementById("btnEnviar5");
let divResultado = <HTMLParagraphElement>document.getElementById("resultado");
let valor1: number = 0;
let valor2: number = 0;
let resultado: number = 0;

//Main
btnEnviar1.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  resultado = valor1 + valor2;
  divResultado.innerHTML = "El resultado de la suma es:" + resultado;
});

btnEnviar2.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  resultado = valor1 - valor2;
  divResultado.innerHTML = "El resultado de la resta es:" + resultado;
});
btnEnviar3.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  resultado = valor1 / valor2;
  divResultado.innerHTML = "El resultado de la división es:" + resultado;
});
btnEnviar4.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  resultado = valor1 * valor2;
  divResultado.innerHTML = "El resultado de la multiplicación es:" + resultado;
});
btnEnviar5.addEventListener("click", () => {
  valor1 = Number(numero1.value);
  valor2 = Number(numero2.value);
  divResultado.innerHTML =
    "El resultado de la potenciación es:" + valor1 ** valor2;
});

// Notas por consola
console.log("el numero 1 es:" + numero1);
console.log("el numero 2 es:" + numero2);
