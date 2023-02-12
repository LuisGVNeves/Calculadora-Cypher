let display = document.getElementById("display");

let resultado = 0;

let buttonValor1 = document.getElementById("button-valor-1").addEventListener('click', () => {
  display.innerHTML += 1;
});
let buttonValor2 = document.getElementById("button-valor-2").addEventListener('click', () => {
  display.innerHTML += 2;
});
let buttonValor3 = document.getElementById("button-valor-3").addEventListener('click', () => {
  display.innerHTML += 3;
});
let buttonValor4 = document.getElementById("button-valor-4").addEventListener('click', () => {
  display.innerHTML += 4;
});
let buttonValor5 = document.getElementById("button-valor-5").addEventListener('click', () => {
  display.innerHTML += 5;
});
let buttonValor6 = document.getElementById("button-valor-6").addEventListener('click', () => {
  display.innerHTML += 6;
});
let buttonValor7 = document.getElementById("button-valor-7").addEventListener('click', () => {
  display.innerHTML += 7;
});
let buttonValor8 = document.getElementById("button-valor-8").addEventListener('click', () => {
  display.innerHTML += 8;
});
let buttonValor9 = document.getElementById("button-valor-9").addEventListener('click', () => {
  display.innerHTML += 9;
});




let buttonSinalIgualdade = document.getElementById("button-sinal-igualdade");


let buttonSomar = document.getElementById("button-somar").addEventListener('click', () => {
  // valorTemporario1.push(display.innerHTML);
  display.innerHTML += " + ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });
});
let buttonSubtrair = document.getElementById("button-subtrair").addEventListener('click', () => {
  // valorTemporario1.push(display.innerHTML);
  display.innerHTML += " - ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });

});
let buttonDividir = document.getElementById("button-dividir").addEventListener('click', () => {
  // valorTemporario1.push(display.innerHTML);
  display.innerHTML += " / ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });

});
let buttonMultiplicar = document.getElementById("button-multiplicar").addEventListener('click', () => {
  // valorTemporario1.push(display.innerHTML);
  display.innerHTML += " * ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });

});


// Limpar operações da calculadora
let buttonCE = document.getElementById("buttonCE").addEventListener('click', () => {
  display.innerHTML = "";
});
