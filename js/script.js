window.addEventListener('keypress', (e) => {
  // Se enter for pressionado, vai resolver conta que tiver no display
  if(e.key == 'Enter'){
    display.innerHTML = eval(display.innerHTML);
  }
  if(e.key == 0){
    display.innerHTML += 0;
  }
  if(e.key == 1){
    display.innerHTML += 1;
  }
  if(e.key == 2){
    display.innerHTML += 2;
  }
  if(e.key == 3){
    display.innerHTML += 3;
  }
  if(e.key == 4){
    display.innerHTML += 4;
  }
  if(e.key == 5){
    display.innerHTML += 5;
  }
  if(e.key == 6){
    display.innerHTML += 6;
  }
  if(e.key == 7){
    display.innerHTML += 7;
  }
  if(e.key == 8){
    display.innerHTML += 8;
  }
  if(e.key == 9){
    display.innerHTML += 9;
  }
  if(e.key == ','){
    display.innerHTML += '.';
  }
  if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/'){

    if(e.key == '+')
      display.innerHTML += " + ";

    if(e.key == '-')
    display.innerHTML += " - ";

    if(e.key == '*')
    display.innerHTML += " * ";

    if(e.key == '/')
    display.innerHTML += " / ";

    // Caso botão seja acionado
    buttonSinalIgualdade.addEventListener('click', () => {
      if(display){
        display.innerHTML = eval(display.innerHTML);
      }
    });
  }
})


let display = document.getElementById("display");


// Limpar operações da calculadora
document.getElementById("buttonCE").addEventListener('click', () => {
  display.innerHTML = "";
});

document.getElementById("buttonC").addEventListener('click', () => {
  display.innerHTML = "";
});

document.getElementById("buttonDel").addEventListener('click', () => {
  display.innerHTML = "";
});

document.getElementById("button-virgula").addEventListener('click', () => {
  display.innerHTML += ".";
});

document.getElementById("button-valor-0").addEventListener('click', () => {
  display.innerHTML += 0;
});


document.getElementById("button-valor-1").addEventListener('click', () => {
  display.innerHTML += 1;
});


document.getElementById("button-valor-2").addEventListener('click', () => {
  display.innerHTML += 2;
});


document.getElementById("button-valor-3").addEventListener('click', () => {
  display.innerHTML += 3;
});


document.getElementById("button-valor-4").addEventListener('click', () => {
  display.innerHTML += 4;
});


document.getElementById("button-valor-5").addEventListener('click', () => {
  display.innerHTML += 5;
});


document.getElementById("button-valor-6").addEventListener('click', () => {
  display.innerHTML += 6;
});



document.getElementById("button-valor-7").addEventListener('click', () => {
  display.innerHTML += 7;
});


document.getElementById("button-valor-8").addEventListener('click', () => {
  display.innerHTML += 8;
});


document.getElementById("button-valor-9").addEventListener('click', () => {
  display.innerHTML += 9;
});




let buttonSinalIgualdade = document.getElementById("button-sinal-igualdade");


let buttonSomar = document.getElementById("button-somar").addEventListener('click', () => {
  display.innerHTML += " + ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {
    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });


});
let buttonSubtrair = document.getElementById("button-subtrair").addEventListener('click', () => {
  display.innerHTML += " - ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });

});
let buttonDividir = document.getElementById("button-dividir").addEventListener('click', () => {
  display.innerHTML += " / ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });

});

let buttonMultiplicar = document.getElementById("button-multiplicar").addEventListener('click', () => {
  display.innerHTML += " * ";
  
  // Caso botão seja acionado
  buttonSinalIgualdade.addEventListener('click', () => {

    if(display){
      display.innerHTML = eval(display.innerHTML);
    }
  });

});



