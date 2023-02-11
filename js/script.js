let display = document.getElementById("display");

let valorTemporario1 = [];

let resultado = 0;


let buttonValor1;
buttonValor1 = document.getElementById("button-valor-1").addEventListener('click', () => {
  valorTemporario1.push(1);
  display.innerHTML += 1;
});

let buttonValor2 = document.getElementById("button-valor-2").addEventListener('click', () => {
  valorTemporario1.push(2);
  display.innerHTML += 2;
});


let buttonSinalIgualdade = document.getElementById("button-sinal-igualdade");

let buttonSomar = document.getElementById("button-somar").addEventListener('click', () => {
  
  // valorTemporario1.push(display.innerHTML);
  display.innerHTML += " + ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {
    resultado = valorTemporario1.reduce((acc,atual) => {
      return acc + atual;
    },0);
  
    display.innerHTML = resultado;
  });
});

















let buttonCE = document.getElementById("buttonCE").addEventListener('click', () => {
  console.log('clicou')
});
