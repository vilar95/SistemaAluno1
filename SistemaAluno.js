let numeroDeAlunos = 10;


// for - if - else/if
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)
    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 == 0) {
        //usando concatenação
        console.log("O número " + contador + " é Par")
    } else {
        //usando irterpolação
        console.log(`O número ${contador} é Ímpar`)
    }
}



// for - if - else/if
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)
    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 != 0) {
        console.log("O número " + contador + " é Ímpar")
    } else {
        console.log(`O número ${contador} é Par`)
    }
}





// while - if - else/if
let contador = 0;

while (contador <= numeroDeAlunos) {
    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é Par")
    } else {
        console.log(`O número ${contador} é Ímpar`)
    }
    contador++;
}




// for of
let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}