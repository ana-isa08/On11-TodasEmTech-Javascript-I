// Exercicios de logica de programação//

// http://www.bosontreinamentos.com.br/programacao-em-javascript/exercicios-de-javascript-resolvidos-funcoes//

// Escreva uma função em JavaScript que mostre na tela a mensagem “Bom dia, Mundo!!!”. // 

console.log ("Bom Dia, mundo")

// Escreva uma função que retorne o cubo de um número fornecido pelo usuário// 

let numero = 9
console.log("O cubo do numero é: " + numero ** 3)

// Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C)// 


// Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos //

const altura = 9 
const base =3
console.log("O valor da área do triangulo é: " + (altura * base)/2 )

// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido// 

const raio = 3
console.log("O valor do perimetro do circulo é: " + (2 * 3,14) * raio)

// Algoritmo "baskara"

//Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula
//de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais,
//conforme exemplo. Se a equação não possuir raízes reais, mostrar uma mensagem


let a = 3;
let b = 2;
let c = -8;

let delta = (b**2) - 4*a*c

if(delta <= 0){
    console.log("Essa equação não possiu raizes reais")
}else{
const raiz = Math.sqrt(delta); 
const x1 = (- b + raiz) / (2*a)
const x2 = (-b - raiz) / (2*a)
console.log(`O valor de X' é ${x1} e o valor de X'' é: ${x2}`)
}


// 1 Execute as seguintes tarefas:

//Declare uma variável chamada meuNome. -eu tenho que criar uma variavel, e o nome dela tem q ser meu nome -variavel ---> nome dela = meuNome let meuNome;
//Inicialize meuNome com um valor adequado em uma linha separada (você pode usar seu nome real ou qualquer outra coisa). dar um valor pra minha variável meuNome = 'amanda'
//Declare uma variável chamada minhaIdade e inicialize-a com um valor, na mesma linha. //na mesma linha eu tenho que iniciar a variavel e dar o valor dela let minhaIdade = true;
//Adicione uma nova linha para alterar o valor armazenado na variável meuNome existente por outro nome.
//noutra linha eu tenho que mudar o valor dessa variavel que eu já criei que se chama meuNome meuNome = 'natasha'

{
let meuNome
meuNome = "Ana";

let minhaIdade = 32; 

meuNome= "Amanda"
console.log(`Minha idade é:  ${minhaIdade} e meu nome é: ${meuNome}`)
}

{
// 3 Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.

//Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.
//Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.
//Mostre o valor de 'calculadora' no console.

let calculadora = 10 + 5;

calculadora = ++ calculadora 
calculadora = calculadora *3
console.log(calculadora)

}

{
//  Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:
//caso 1: 12 dias e 320 km;
//caso 2: 6 dias e 390km;

let dias = 6
let kms = 390

const aluguel = 60 * dias
const kmRodado = 0.15 * kms

let total = aluguel + kmRodado
console.log(`O valor a ser pago é de ${total}`)
}


// Receba do usuário 3 números ou crie variaveis com 3 números, e calcule a média entre eles.

let x = 2
let y = 4
let z = 6
console.log(`A media dos numeros é: ${(x+y+z)/2}`)

// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let diaSemana = 7 // Usar o operador de comparação e não de igualdade // 

if(diaSemana == 1){                    // Para criar a condição temos que ter um bloco de "se não" else if
    console.log("Domingo")             // para cada condição
} else if(diaSemana == 2){             // apenas = atribui o valor e == testa a igualdade se x é igual a 
    console.log("Segunda-Feira")       // Y (x == Y) então 
}else if (diaSemana == 3){
    console.log("Terça-Feira")
}else if (diaSemana == 4){
    console.log("Quarta-Feira")
}else if (diaSemana == 5){
    console.log("Quinta-Feira")
}else if (diaSemana == 6){
    console.log("Sexta-Feira")
}else if (diaSemana == 7){
    console.log("Sábado")
}

// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let primeiroNumero = 10
let segundoNumero = 10

if(primeiroNumero > segundoNumero){
    console.log(`O numero maior é: ${primeiroNumero}`)
}else if(primeiroNumero == segundoNumero){
    console.log(" Os numeros são iguais")
}else{ 
    console.log(`O numero maior é: ${segundoNumero}`)
}

// João, Pescador, \comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.

const quilos = 50
let pesca = 60  
let diferenca = pesca - 50

if (pesca > quilos){
    console.log(`Excesso: ${diferenca}KG, o valor da multa é de R$${diferenca* 4} reais`)
}else if (diferenca <=quilos){
    console.log("Conteúdo Zero")
}    

//