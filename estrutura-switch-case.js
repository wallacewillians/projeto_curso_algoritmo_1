/*

   valor1, valor2, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   // escreva("Programa calculadora")
   escreva("Digite o Primeiro Valor: ")
   leia(valor1)
   escreva("Digite a operação: ")
   leia(operacao)
   escreva("Digite o Segundo Valor: ")
   leia(valor2)
   
   se operacao = "+" entao
      resultado := valor1 + valor2
   senao
        se operacao = "-" entao
           resultado := valor1 - valor2
        senao
             se operacao = "*" entao
                resultado := valor1 * valor2
             senao
                  se operacao = "/" entao
                     resultado := valor1 / valor2
                  fimse
             fimse
        fimse
   fimse
   escreva("Resultado do calculo é: ", resultado)

   */

  function acaoBotao(params) {

    var valor1, valor2, resultado, operacao;

    valor1 = prompt("Digite o Primeiro Valor: ")
    operacao = prompt("Digite a operação: ")
    valor2 = prompt("Digite o Segundo Valor: ")

    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
    }

    document.getElementById("paragrafo").innerText = resultado
}

