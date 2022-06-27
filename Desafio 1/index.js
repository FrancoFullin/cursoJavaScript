console.log(`inicio`)
let cantidadJugos = parseInt(prompt(`Cuantos jugos de naranja vas a comprar`))
while (isNaN (cantidadJugos) || cantidadJugos < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de jugos a comprar`)
    cantidadJugos = parseInt(prompt(`Cuantos jugos de naranja vas a comprar`))
}


let cantidadCocas = parseInt(prompt(`Cuantas coca colas vas a comprar`))
while (isNaN (cantidadCocas) || cantidadCocas < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de cocas a comprar`)
    cantidadCocas = parseInt(prompt(`Cuantas coca colas vas a comprar`))
}


let cantidadSprites = parseInt(prompt(`Cuantos sprites vas a comprar`))
while (isNaN (cantidadSprites) || cantidadSprites < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de sprites a comprar`)
    cantidadSprites = parseInt(prompt(`Cuantos sprites vas a comprar`))
}


let cantidadVodkas = parseInt(prompt(`Cuantos vodkas vas a comprar`))
while (isNaN (cantidadVodkas) || cantidadVodkas < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de vodkas a comprar`)
    cantidadVodkas = parseInt(prompt(`Cuantos vodkas vas a comprar`))
}


let cantidadFantas = parseInt(prompt(`Cuantas fantas vas a comprar`))
while (isNaN (cantidadFantas) || cantidadFantas < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de fantas a comprar`)
    cantidadFantas = parseInt(prompt(`Cuantas fantas vas a comprar`))
}


let cantidadAguas = parseInt(prompt(`Cuantas aguas vas a comprar`))
while (isNaN (cantidadAguas) || cantidadAguas < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de aguas a comprar`)
    cantidadAguas = parseInt(prompt(`Cuantas aguas vas a comprar`))
}

let valorJugo = 100
if (cantidadJugos > 8) {
    valorJugo = 70
}

let valorCoca = 120
if (cantidadCocas > 10) {
    valorCoca = 100
}
let valorSprite = 110
if (cantidadSprites > 7) {
    valorSprite = 90
}
let valorVodka = 250
if (cantidadVodkas > 2) {
    valorVodka = 175
}
let valorFanta = 120
if (cantidadFantas > 5) {
    valorFanta = 95
}
let valorAgua = 80 
if (cantidadAguas > 2) {
    valorAgua = 50
}


let total = (cantidadJugos*valorJugo) + (cantidadCocas*valorCoca) + (cantidadSprites*valorSprite)
+ (cantidadVodkas*valorVodka) + (cantidadFantas*valorFanta) + (cantidadAguas*valorAgua)


alert(`El valor final es de $${total}`)

/* function calcularTotal() {
    let cantidadJugos = document.getElementById(`jugo`).value
    let cantidadCocas = document.getElementById(`coca`).value
    let total = cantidadJugos*100 + cantidadCocas*70
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = total
} */