const nome = "José"
const idade = 18
const bebidaMaior = "cerveja"
const bebidaMenor = "suco"

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)