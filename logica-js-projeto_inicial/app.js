alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    // Se o "chute" for igual o número secreto.
    if (chute == numeroSecreto){
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}