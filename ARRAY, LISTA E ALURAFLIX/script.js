var listasFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];
// elemento         1           2           3
// indice           0           1           2

// adcionando novos elementos
listasFilmes.push("Harry Potter 3");
listasFilmes.push("Harry Potter 4");
listasFilmes.push("Harry Potter 5");
listasFilmes.push("Harry Potter 6");
listasFilmes.push("Harry Potter 7");
listasFilmes.push("Harry Potter 8");

for (var indice = 0; indice < listasFilmes.length; indice++) {
  //   document.write("<p>" + indice + "</p>");
  document.write("<p>" + listasFilmes[indice] + "</p>");
}
