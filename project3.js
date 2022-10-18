var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Nice !! You got it right :) ";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "You should put an number between 0 and 10 ";
  } else {
    elementoResultado.innerHTML =
      ":( Good Luck next time.The number was " + numeroSecreto;
  }
}
