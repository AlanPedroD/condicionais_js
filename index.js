function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write("<p>" + frase + "</p>");
}

function calculaImc(altura, peso) {

    return peso / ( altura * altura );
}

var nome = prompt ("Qual é seu nome?");
var alturaInformada = (prompt("digite a sua altura:"));
var pesoInformado =  (prompt("digite o seu peso:"));
var imc = calculaImc(alturaInformada, pesoInformado);

if (imc < 18.5) {
    mostra("Olá " + nome + " o seu imc é " + imc.toFixed(2));
    pulaLinha();
    mostra ("Seu imc está abaixo da média")
}

if (imc > 25.0) {
    mostra("Olá " + nome + " o seu imc é " + imc.toFixed(2));
    pulaLinha();
    mostra ("Seu imc está acima do recomendado")
    mostra ("Busque sempre uma alimentãção saudável")
}

if (imc >= 18.5 && imc <= 25.0)  {
    mostra("Olá " + "<strong>" + nome + "</strong>" + " o seu imc é " + "<strong>" +imc.toFixed(2) + "</strong>");
    pulaLinha();
    mostra ("Você está dentro da média recomendada")
    mostra ("Parabens !!!");
}