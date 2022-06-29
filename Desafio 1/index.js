function pedirCantidad(nombreBebida){
    let cantidad = parseInt(prompt(`Cuantos ${nombreBebida} vas a comprar`))
while (isNaN (cantidad) || cantidad < 0) {
    alert(`Valor ingresado incorrecto, por favor ingrese la cantidad de ${nombreBebida} que vas a comprar`)
    cantidad = parseInt(prompt(`Cuantos ${nombreBebida} de naranja vas a comprar`))
}
    return cantidad
}

let cantidadJugos = pedirCantidad(`Jugos`)
/* console.log(cantidadJugos) */
let cantidadCocas = pedirCantidad(`Cocas`)
/* console.log(cantidadCocas) */
let cantidadSprites = pedirCantidad(`Sprites`)
/* console.log(cantidadSprites) */
let cantidadVodkas = pedirCantidad(`Vodkas`)
/* console.log(cantidadVodkas) */
let cantidadFantas = pedirCantidad(`Fantas`)
/* console.log(cantidadFantas) */
let cantidadAguas = pedirCantidad(`Aguas`)
/* console.log(cantidadAguas) */

let valorJugos = 100
let valorCocas = 120
let valorSprites = 110
let valorVodkas = 250
let valorFantas = 120
let valorAguas = 80

/* function precioTotal(cantidadBebidas, valorBebidas){
    if (cantidadBebidas >= 5) {
        valorBebidas - 30
    }
    cantidadBebidas * valorBebidas
    return valorBebidas
}

let valorTotalJugos = precioTotal(cantidadJugos, 100)
console.log(valorTotalJugos) */

if (cantidadJugos > 8) {
    valorJugos = 70
}
if (cantidadCocas > 10) {
    valorCocas = 100
}
if (cantidadSprites > 7) {
    valorSprites = 90
}
if (cantidadVodkas > 2) {
    valorVodkas = 175
}
if (cantidadFantas > 5) {
    valorFantas = 95
}
if (cantidadAguas > 2) {
    valorAguas = 50
}

let total = (cantidadJugos*valorJugos) + (cantidadCocas*valorCocas) + (cantidadSprites*valorSprites)
+ (cantidadVodkas*valorVodkas) + (cantidadFantas*valorFantas) + (cantidadAguas*valorAguas)


alert(`El valor final es de $${total}`)





/* function calcularTotal() {
    let cantidadJugos = document.getElementById(`jugo`).value
    let cantidadCocas = document.getElementById(`coca`).value
    let total = cantidadJugos*100 + cantidadCocas*70
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = total
} */