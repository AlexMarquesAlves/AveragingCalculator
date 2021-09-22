var carta1 = {
  nome: "Evelynn",
  imagem:
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_5.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
  },
};
var carta2 = {
  nome: "Senna",
  imagem:
    "https://s2.glbimg.com/ShBHE604TROBe0J2uuAdDdY64sk=/0x0:4096x2417/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/A/u/VT1njpQTeaxJEs1tTfHQ/senna-true-damage.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 5,
  },
};
var carta3 = {
  nome: "Zoe",
  imagem:
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10,
  },
};
var carta4 = {
  nome: "Ashe",
  imagem:
    "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/09/15163909/Eh-Q5Q9XcAAFCR-2048x1209-1.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 6,
  },
};
var carta5 = {
  nome: "Samira",
  imagem:
    "https://a-static.besthdwallpaper.com/psyops-samira-anime-fa-league-of-legends-lol-papel-de-parede-2560x2048-64496_33.jpg",
  atributos: {
    ataque: 12,
    defesa: 7,
    magia: 9,
  },
};
var carta6 = {
  nome: "Irelia",
  imagem:
    "https://cdna.artstation.com/p/assets/images/images/016/837/784/large/he-zhicheng-.jpg?1553662017&dl=1",
  atributos: {
    ataque: 14,
    defesa: 9,
    magia: 6,
  },
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var elementoResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
