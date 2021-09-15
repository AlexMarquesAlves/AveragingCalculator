function mediaJavascript (){
    const input1 = Number(window.prompt('Sua 1º nota?'));
    const input2 = Number(window.prompt('Sua 2º nota?'));
    const input3 = Number(window.prompt('Sua 3º nota?'));
    const input4 = Number(window.prompt('Sua 4º nota?'));

    const somaDosInputs = input1+input2+input3+input4

    const media = (somaDosInputs/4).toFixed(2)

    const aprovado = media >= 6 ? `Aprovado Com media ${media}` : `Reprovado Com media ${media}`

    document.getElementById("conteudo").innerHTML = aprovado}