// Ejercicio 1
var persona = {
    nombre: "Santiago",
    edad: "20",
    cedula: "1002577024"
}
console.log("Nombre: " + persona.nombre, ", ", "Edad: " + persona.edad, ", ", "Cedula: " + persona.cedula);

if (persona.edad >= 18) {
    alert("Es mayor");
}
else {
    alert("No es mayor");
}

//Ejercicio 2
class cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }
    mostrar() {
        console.log(`Titular: ${this.titular}, Saldo: ${this.cantidad}`)
    }
    consignar(valor) {
        if (valor > 0) {
            this.cantidad = this.cantidad + valor;
            console.log("Consignación exitosa")
        }
        else if (valor <= 0) {
            console.log("El valor ingresado no es invalido.")
        }
    }
    retirar(valor) {
        if (valor <= this.cantidad) {
            this.cantidad = this.cantidad - valor;
            console.log("Retiro exitoso")
            console.log(`Tu saldo actual es : ${this.cantidad}`)
        }
        if (valor > this.cantidad) {
            console.log("Saldo insuficiente")
            console.log(`Tu saldo es de : ${this.cantidad}`)
        }
    }
}
let cuentaS = ["Santiago", 2000000]
let cuenta1 = new cuenta(cuentaS[0], cuentaS[1])
cuenta1.consignar(800000)
cuenta1.retirar(1200000)
cuenta1.mostrar()


//Ejercicio 3
class formulas {
    suma(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
        var sumar = n1 + n2;
        return (`La suma total es: ${sumar}`);
    }

    fibonacci(num) {
        var fib = [0, 1];
        for (var i = 2; i <= num; i++) {
            fib.push(fib[i - 1] + fib[i - 2])
            console.log(fib[i]);
        }

    }
    modulo(num) {
        for (var i = 1; i <= num; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }

    }
    primos(num) {
        for (i = 0; i < num; i++) {
            for (var x = 2; x < i; x++) {
                if (i % x === 0) {
                    console.log(`El número ${i} no es primo`);
                }
                else {
                    console.log(`El número ${i} es primo`);
                }
            }
        }

    }
}

//Ejercicio 4
class persona {
    constructor(nombre, edad, dni, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        this.imc = (this.peso / (this.altura * this.altura))
        if (this.imc < 20) {
            return -1;
        }
        if (this.imc >= 02 && this.imc <= 25) {
            return 0;
        }
        if (this.imc > 25) {
            return 1;
        }

    }
    esMayor() {
        if (edad >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
    comprobarSexo(sexo) {
        this.sexo = sexo;
        var sexoA = this.sexo.toLowerCase();
        if (sexoA == 'h' || sexoA == 'm') {
            return `El sexo es correcto ${sexoA}`

        } return this.sexo = 'h'
    }
}


//Ejercicio 5
class contraseña {
    crear(contraseñaS) {
        this.contraseña = contraseñaS;
    }
    esFuerte() {
        this.contraseña;
        var mayusculas = 0;
        var minusculas = 0;
        var numeros = 0;

        for (var i = 0; i < this.contraseña.length; i++) {
            if ((this.contraseña[i] === this.contraseña[i].toUpperCase()) === true && ((this.contraseña[i] <= 0 || this.contraseña[i] >= 0) === false)) {
                mayuscula += 1
            }
            if ((this.contraseña[i] === this.contraseña[i].toLowerCase()) === true && ((this.contraseña[i] <= 0 || this.contraseña[i] >= 0) === false)) {
                minuscula += 1
            }

            if (this.contraseña[i] <= 0 || this.contraseña[i] >= 0 === true) {
                numeros += 1
            }

        }
        if (mayusculas > 2 && minusculas > 1 && numeros > 5) {

            console.log(`Su contraseña es segura. mayusculas ${mayusculas}, minusculas ${minusculas}, numeros ${numeros}`)
        } else { console.log(`Su contraseña no es segura. mayusculas ${mayusculas}, minusculas ${minusculas}, numeros ${numeros}`) }
    }

    generarPassword() {
        var result = '';
        var mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var minusculas = 'abcdefghijklmnñopqrstuvwxyz'
        var numeros = '0123456789'

        var mayusculasLength = mayusculas.length;
        var minusculasLength = minusculas.length;
        var numerosLength = numeros.length;


        for (var i = 0; i < 3; i++) {
            result += mayusculas.charAt(Math.floor(Math.random() * mayusculasLength));
        }

        for (var i = 0; i < 2; i++) {
            result += minusculas.charAt(Math.floor(Math.random() * minusculasLength));
        }


        for (var i = 0; i < 6; i++) {
            result += numeros.charAt(Math.floor(Math.random() * numerosLength));
        }
        return result;
    }

    seguridadPassword(contraseñaP) {
        this.contraseña = contraseñaP;
        var longitud = this.contraseña.length;

        if (longitud >= 1 && tam <= 6) {
            return "DEBIL"
        }
        if (longitud >= 7 && tam <= 10) {
            return "MEDIA"
        }
        if (longitud >= 20) {
            return "FUERTE"
        }
    }

}

//Ejercicio 6 y 7
class contador {
    valorActualN(nuevoValor) {
        this.valorActual = nuevoValor
    }
    accionG(accionp) {
        this.accion = accionp;
        if (this.accion === 'valorActual()') {
            this.valorActual
            return `El contador es ${this.valorActual}`
        }
        if (this.accion === 'dec()') {

            this.valorActual -= 1
            return `El contador es ${this.valorActual}`
        }
        if (this.accion === 'inc()') {
            this.valorActual += 1
            return `El contador es ${this.valorActual}`
        }
        if (this.accion === 'reset()') {
            this.valorActual = 0;
            return `El contador es ${this.valorActual}`
        }
    }

    ultimoComando() {
        this.accion
        if (this.accion === 'valorActual()') {
            return `Valor actual`
        }
        if (this.accion === 'dec()') {

            return `Decremento`

        }
        if (this.accion === 'inc()') {
            return `Incremento`
        }
        if (this.accion === 'reset()') {
            return `Resetear`
        }

    }
}

//Ejercicio 8
class chimuela {
    constructor() {
        this.energia = 0
    }
    comer(cantidad) {
        this.energia += (cantidad * 4)

    }
    volar(distancia) {
        this.energia -= (distancia + 10)
    }
    VerEnergia() {
        console.log(`Energía actual: ${this.energia}`)
    }

}
let chimuela1 = new chimuela()
chimuela1.comer(100)
chimuela1.volar(10)
chimuela1.volar(20)
chimuela1.VerEnergia()

//Ejercicio 9
class chimuela {
    constructor() {
        this.energia = 0
    }
    comer(cantidad) {
        this.energia += (cantidad * 4)

    }
    volar(distancia) {
        this.energia -= (distancia + 10)
    }
    VerEnergia() {
        console.log(`Energía actual: ${this.energia}`)
    }
    estaDebil() {
        if (this.energia < 50)
            return true
        else {
            return false
        }
    }
    estafeliz() {
        if (this.energia >= 500 && this.energia <= 1000) {
            return true
        }
        else {
            return false
        }
    }
    cuandoQuiereVolar() {
        let base = this.energia / 5
        let total = 0
        let plus = 0
        if (this.energia >= 300 && this.energia <= 400) {
            plus += 10
        }
        if (this.energia % 20 == 0) {
            plus += 15
        }
        total = base + plus
        console.log(`Quiere volar ${total} kilometros`)


    }

}
let chimuela1 = new chimuela()
chimuela1.comer(100)
chimuela1.volar(10)
chimuela1.volar(20)
chimuela1.VerEnergia()
chimuela1.estaDebil()
chimuela1.estafeliz()
chimuela1.cuandoQuiereVolar()

//Ejercicio 10
class calculadora {
    constructor() {
        this.total = 0
    }
    cargar(numero) {
        this.total = numero
    }
    sumar(numero) {
        this.total += numero
    }
    restar(numero) {
        this.total -= numero
    }
    multiplicar(numero) {
        this.total *= numero
    }
    valorActual() {
        console.log(`Valor actual: ${this.total}`)
    }
}

let calc = new calculadora()
calc.cargar(0)
calc.sumar(4)
calc.multiplicar(5)
calc.restar(8)
calc.multiplicar(2)
calc.valorActual()

//Ejercicio 11
class libro {
    constructor(titulo, autor, nEjemplares, nEjemplaresPrestados) {
        this.titulo = titulo
        this.autor = autor
        this.nEjemplares = nEjemplares
        this.nEjemplaresPrestados = nEjemplaresPrestados
    }
    prestar() {
        if (this.nEjemplares > 0) {
            this.nEjemplaresPrestados += 1
            this.nEjemplares -= 1
            return true
        }
        else {
            return false
        }
    }
    devolver() {
        if (this.nEjemplaresPrestados > 0) {
            this.nEjemplaresPrestados -= 1
            this.nEjemplares += 1
            return true
        }
        else {
            return false
        }
    }
    toString() {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ejemplares disponibles: ${this.nEjemplares}`)
        console.log(`Ejemplares Prestados: ${this.nEjemplaresPrestados}`)
    }
}

//Ejercicio 12
class enterprise {
    constructor(potencia, coraza) {
        this.potencia = 50
        this.coraza = 5
    }
    encontrarPilaAtomica() {
        if (this.potencia >= 100) {
            console.log("Potencia Maxima")
        }
        else {
            this.potencia += 25
        }
        if (this.potencia > 100) {
            this.potencia = 100
        }
        console.log(`La potencia actual es de ${this.potencia}`)
    }

    encontrarEscudo() {
        if (this.coraza >= 20) {
            console.log("Escudo Maximo")
        }
        else {
            this.coraza += 10
        }
        if (this.coraza > 20) {
            this.coraza = 20
        }
        console.log(`La coraza actual es de ${this.coraza}`)
    }

    recibirAtaque(puntosDaño) {
        let total = this.coraza - puntosDaño
        if (total >= 0) {
            this.coraza = total
        }
        if (total < 0) {
            this.coraza = 0
            this.potencia -= (total * -1)
        }
    }
    mostrarStats() {
        console.log("los stats actuales son: ")
        console.log(`La coraza actua es de ${this.coraza}`)
        console.log(`La potencia actual es e ${this.potencia}`)
    }

}

let nave1 = new enterprise()
nave1.encontrarPilaAtomica()
nave1.recibirAtaque(14)
nave1.encontrarEscudo()
nave1.mostrarStats()

//Ejercicio 13
class enterprise {
    constructor(potencia, coraza) {
        this.potencia = 50
        this.coraza = 5
    }
    encontrarPilaAtomica() {
        if (this.potencia >= 100) {
            console.log("Potencia Maxima")
        }
        else {
            this.potencia += 25
        }
        if (this.potencia > 100) {
            this.potencia = 100
        }
        console.log(`La potencia actual es de ${this.potencia}`)
    }

    encontrarEscudo() {
        if (this.coraza >= 20) {
            console.log("Escudo Maximo")
        }
        else {
            this.coraza += 10
        }
        if (this.coraza > 20) {
            this.coraza = 20
        }
        console.log(`La coraza actual es de ${this.coraza}`)
    }

    recibirAtaque(puntosDaño) {
        let total = this.coraza - puntosDaño
        if (total >= 0) {
            this.coraza = total
        }
        if (total < 0) {
            this.coraza = 0
            this.potencia -= (total * -1)
        }
    }
    mostrarStats() {
        console.log("los stats actuales son: ")
        console.log(`La coraza actua es de ${this.coraza}`)
        console.log(`La potencia actual es e ${this.potencia}`)
    }
    fortalezaDefensiva() {
        return this.coraza + this.potencia
    }
    necesitaFortalecer() {
        if (this.potencia <= 20 && this.coraza == 0) {
            return true
        }
        else {
            return false
        }
    }
    fortalezaOfensiva() {
        if (this.potencia < 20) {
            return 0
        }
        if (this.potencia > 20) {
            return (this.potencia - 20) / 2
        }
    }
}

//Ejercicio 14
class motor {
    constructor() {
        this.cambioActual = 0;
        this.rpm = 0;
        this.velocidad = 0
        this.consumo = 0
    }
    arrancar() {
        this.cambioActual = 1
        this.rpm = 500
    }
    subirCambio() {
        this.cambioActual += 1;
    }
    bajarCambio() {
        this.cambioActual -= 1;
    }
    subirRPM(cantidad) {
        this.rpm += cantidad
    }
    bajarRPM(cantidad) {
        this.rpm -= cantidad
    }
    velocidadTotal() {
        this.velocidad = (this.rpm / 100) * (0.5 + (this.cambioActual / 2))
    }
    consumoActualPorKm() {
        this.consumo = 0.5
        if (this.cambioActual == 1) {
            this.consumo *= 3
        }
        if (this.cambioActual == 2) {
            this.consumo *= 2
        }
        if (this.rpm > 3000) {
            let calculo = (this.rpm - 2500) / 500
            this.consumo = this.consumo * calculo
        }
        return this.consumo
    }
}