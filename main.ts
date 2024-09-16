function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

let resultadoMultiplicacao = multiplicar(28, 2);
console.log(resultadoMultiplicacao);

let mensagemSaudacao = saudacao("Fred");
console.log(mensagemSaudacao);