
function chutar() {
    var numeroSecreto = parseInt(Math.radom()*11)
    elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)
    console.log(chute);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você Acertou"
        console.log("Acertou!!");
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Somente números de 0 a 10..."
        console.log("Somente numeros de 0 a 10...");
    } else {
        elementoResultado.innerHTML = "Você Errou, o número era "+numeroSecreto;
        console.log("Errou!");
    }

}