import { menu } from '../view/menuPral'
import { leerTeclado } from '../view/entradaTeclado'
import { Triangulo } from '../clases/triangulo'
import { Rectangulo } from '../clases/rectangulo'
import { Cuadrado } from '../clases/cuadrado'
import { Circulo } from '../clases/circulo'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Cálculo del perímetro y área de un triángulo')
                let baset, alturat, lado1, lado2: number
                baset =  parseInt( await leerTeclado('Introduzca la base del triángulo: '))
                alturat =  parseInt( await leerTeclado('Introduzca la altura del triángulo: '))
                lado1 =  parseInt( await leerTeclado('Introduzca otro lado: '))
                lado2 =  parseInt( await leerTeclado('Introduzca el último lado: '))
                let triangulo = new Triangulo(baset,alturat,lado1,lado2)
                console.log("El perímetro del triángulo es="+triangulo.getPerimetro())
                console.log("El área del triángulo es="+triangulo.getArea())
                break
            case 2:
                console.log('Cálculo del perímetro y área de un rectángulo')
                let baser, alturar: number
                baser = parseInt(await leerTeclado('Introduzca la base del rectángulo: '))
                alturar = parseInt(await leerTeclado('Introduzca la altura del rectángulo: '))
                let rectangulo = new Rectangulo(baser,alturar)
                console.log("El perímetro del rectángulo es="+ rectangulo.getPerimetro())
                console.log("El área del rectángulo es="+ rectangulo.getArea())
                break
            case 3:
                console.log('Cálculo del perímetro y área de un cuadrado')
                let ladocua: number
                ladocua = parseInt(await leerTeclado('Introduzca el lado del cuadrado: '))
                let cuadrado = new Cuadrado(ladocua)
                console.log("El perímetro del cuadrado es="+cuadrado.getPerimetro())
                console.log("El área del cuadrado es="+cuadrado.getArea())
                break
            case 4:
                console.log('Cálculo del perímetro y área de un círculo')
                let radio: number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo: '))
                let circulo = new Circulo(radio)
                console.log("El perímetro del círculo es="+circulo.getPerimetro())
                console.log("El área del círculo es="+circulo.getArea())
                break
            case 0:
                console.log('\nAdiós')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()