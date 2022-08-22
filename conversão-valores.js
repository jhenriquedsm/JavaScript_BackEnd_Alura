// String ()

let telefone = 12341234
console.log("O telefone é " + String(telefone)) // conversão de número pra string

let telefone2 = 12345678
console.log("O telefone é " + telefone.toString()) // outra forma de converter

let usuarioConectado = false
if (usuarioConectado === false){
    console.log("Usuário Desconectado")
} else {
    console.log("Usuário Conectado")
}
console.log(String(usuarioConectado)) // conversão da booleana pra string


// Number()

let largura = "10"
let altura = "5"
console.log(Number(largura) * Number(altura)) //conversão de string pra number

let largura2 = "10"
let altura2 = "5"
console.log( + largura * + altura) // conversão de string pra number usando o + antes das variaveis


let meuNome = "josé henrique"
console.log(Number(meuNome)) // vai retornar NaN, pois a variavel meuNome não contém apenas números


let usuarioConectado2 = false
console.log(Number(usuarioConectado2)) // conversão booleana para numero, false = 0

usuarioConectado2 = true
console.log(Number(usuarioConectado2)) // true = 1
