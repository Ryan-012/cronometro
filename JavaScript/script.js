// variáveis dos tempos que irão ser aumentadas
let horas = 0;
let minutos = 0;
let segundos = 0;
let cron;
// criando a função de disparo
function começar() {
  parar();
  cron = setInterval(() => tempo(), 1000);
}
// parar cronômetro
function parar() {
  clearInterval(cron);
}

// pegando os tempos no HTML
let tempoS = document.getElementById("segundos");
let tempoM = document.getElementById("minutos");
let tempoH = document.getElementById("horas");
// criando o sistema como esse cronômetro vai funcionar
function tempo() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos == 60) {
    minutos = 0;
    horas++;
  }
  tempoS.innerText = retornar(segundos);
  tempoM.innerText = retornar(minutos);
  tempoH.innerText = retornar(horas);
}
// função para quando o número for menor que 10, ele adicionar um 0 ao lado
function retornar(input) {
  return input > 10 ? input : `0${input}`;
}
// resetar o cronômetro
function resetar() {
  horas = 0;
  minutos = 0;
  segundos = 0;
  tempoH.innerText = "00";
  tempoM.innerText = "00";
  tempoS.innerText = "00";
}
// salvar seus tempos
function salvar() {
  let resultado =
    tempoH.innerText + " " + tempoM.innerText + " " + tempoS.innerText;
  let lista = document.getElementById("temposLista").innerHTML;
  lista += "<li>" + "Seu tempo foi:" + " " + resultado + "</li>";
  document.getElementById("temposLista").innerHTML = lista;
}
// apagar todos os tempos
function apagarTudo() {
  let lista = document.getElementById("temposLista");
  lista.innerHTML = "";
}
