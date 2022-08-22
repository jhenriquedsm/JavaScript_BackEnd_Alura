// parâmetros de função

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(10, 20))
console.log(soma(245, 50))
console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos`
}

console.log(nomeIdade("José Henrique", 18))

function multiplicacao(num1 = 1, num2 = 1) {
    return num1 * num2
}

console.log(multiplicacao(255, 2))
console.log(multiplicacao(soma(10, 10), soma(2, 3)))
console.log(multiplicacao(soma(4, 5)))