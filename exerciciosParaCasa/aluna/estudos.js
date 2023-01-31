{
let nome = "Sheik"
let idade = 39;
let cidade = "Campina Grande"

console.log(`O nenê ${nome} fofinho da mamãe tem ${idade} em anos humanos e mora na cidade de ${cidade}`)
}

{
const today = new Date();
console.log(`Apresento informação de dia e hora: ${today}`) // concatenação de texto - tamplate string //
}

// Tipo de variável: let ou const + nome da variável + sinal de igual para atribuir o valor da variárel\\

// Operadores lógicos //


// Para o comando & todos os comandos tem q ser verdadeiros, para ser verdadeiro, caso aluma sentença seja falsa
//será identificado como falso/ 
{
let diaEnsolarado = true
let fDS = true
let criancas = false
let chuva = false

console.log(diaEnsolarado && fDS) // dia ensolaradao = verdadeiro e fds = verdadeiro, logo = verdadeiro

console.log(diaEnsolarado && chuva) // dia ensolarado = verdadeiro e chuva = falso, logo = falso


// Para o comando or, simbolizado pelo >> || <<  todas as opções são verdadeiras, exceto se todas forem faltas//

let sol = true
let domingo = true
let protetor = false
let carroOk = false

console.log(sol || protetor) // sol = verdadeiro ou protetor = false = verdadeiro 
console.log(protetor || carroOk) // protetor = falso ou carroOk false = falso = false 
console.log(sol|| domingo) // sol = verdadeiro ou domingo = verdadeiro = verdadeiro

// Para o comando não representado por >> ! << temos, ele inverte o resutado//

console.log(!protetor) // o resultado vai ser verdadeiro visto que o valor de protetor é falso. 

let idade = 15
let dog = 02

console.log(idade != dog) // como idade não é igual a dog isso é verdadeiro, então o resultado é verdadeiro. 
}

// Operadores Unários//
{
    let idade = 15
    let dog = 02
    let nome = "sheik"
    
    console.log(`Hoje tenho 15 anos, ano que vem terei ${++idade} anos`)
    console.log(`Hoje tenho 02 cachorros, ano que vem terei ${++dog} cachorros`)
    }

// Condições // 

  // if = se // 
  // else if = se não // 
  // else = faça // 
{
  let diaDaSemana = "Sabado"

  if (diaDaSemana == "Sabado"){              // Condição verdadeira // 
    console.log("Massa, hoje tem aula")
  }else{
    console.log("Hoje não haverá aula")      // caso fosse falsa, essa que seria apresentada // 
  }
}

{
    let diaDaSemana = "terça"
  
    if (diaDaSemana == "Sabado"){              // Se // 
      console.log("Massa, hoje tem aula")
    } else if(diaDaSemana == "quarta"){        // Se nao se // 
       console.log("Hoje é quarta-feira") 
    } else {                                   // Se não // 
      console.log("Hoje não haverá aula")       
    }
  }


  // Exercicios // 

  // Diga pra mim se o numero é par ou impar, por favor // 
  
   let numero = prompt("Digite um numero para saber se é par ou impar")   

  if (numero % 2 == 0){             // se a variavel é divisivel por 2 e resta zero, logo ela é par,
    alert("O numero é par")   // ela é impar // 
    }else{
        alert("O numero é impar")
    }

    // Crie um programa que se a aluna tirou nota maior ou igual a 6 imprima "Aprovada", se for maior ou igual
    // a 5 imprima "recuperação", se não for nenhuma das duas imrpima "reprovada"

    let nota = prompt("Digite uma nota")      

    if(nota >= 6){
        alert("Aprovada")
    }else if (nota >= 5){
        alert("Recuperação")
        }else{
        alert("reprovada")
    }
        
    
    
  

    
  
  
