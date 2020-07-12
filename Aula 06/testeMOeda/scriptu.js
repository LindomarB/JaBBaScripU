var n1 = parseFloat(window.prompt("Digite um valor float"))
document.writeln(`numero digitado ${n1.toFixed(2)} com apenas dois digitos depois da virgula</br>`)
// so funciona se estiver em float. ou seja parseado de string para float
document.writeln(`numero digitado ${n1.toLocaleString('pt-BR',{style:'currency',currency:'USD'})} a corretagem em dolar</br>`)
document.writeln(`numero digitado ${n1.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} a corretagem em Real`)
document.writeln(`numero digitado ${n1.toLocaleString('pt-BR',{style:'currency',currency:'EUR'})} a corretagem em EURO`)