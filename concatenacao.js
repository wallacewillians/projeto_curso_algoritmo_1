/* 

// Seção de Declarações das variáveis 
   nome: caracter
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("Digite o nome")
   leia(nome)
   escreval ("Digite um numero")
   leia(numero)

   escreval (nome, " : ", numero)

   */

var nome, numero;

nome = prompt("Digite seu Nome")
numero = prompt("Digite o Numero")

document.getElementById("paragrafo").innerText = nome + " : " + numero