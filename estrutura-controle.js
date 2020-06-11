/*escreval ("Digite o nome do Aluno: ")
leia (nome)
escreval ("Digite a Nota 1 do Aluno: ")
leia (nota1)
escreval ("Digite a Nota 2 do Aluno:  ")
leia (nota2)
media := (nota1 + nota2) / 2

se (media >= 50) entao
   escreval ("Aprovado! ", nome)
senao
   escreval ("Reprovado! ", nome)
fimse
*/

var nota1, nota2, nome, media;
    

nome = prompt ("Digite o nome do aluno: " );
nota1 = prompt ("Digite a Nota 1 do Aluno: ");
nota2 = prompt ("Digite a Nota 2 do Aluno: ");

media = (parseInt(nota1) + parseInt(nota2)) / 2;

    if(media >= 50)
        alert("Aprovado " + nome)
    else
        alert("Reprovado " + nome)