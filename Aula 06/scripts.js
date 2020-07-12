var nome = window.prompt("qual e o seu nome? ")
document.writeln(`seu nome é <strong>${nome}</strong> </br>E tem ${nome.length} letras`)
var moeda = parseFloat(window.prompt("Digite um valor com ponto flutuante"))
document.writeln(`${moeda} // o numero que voce digitou </br>`)
document.writeln(`${moeda.toFixed(2)} // fixado para duas casas depois da virgula</br>`)// para duas casas depois da virgula
document.writeln(`${moeda.toFixed(2).replace(".",",")} // fixado para duas casas depois da virgula e substituido o ponto por virgula`)// para duas casas depois da virgula

var n1 = 154.1585484
document.writeln(`${n1.toLocateString('pt-BR',{style:'curency',currency:'BLR'})} // fixado para duas casas depois da virgula</br>`)