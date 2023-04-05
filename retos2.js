class Persona{
  constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
  }

  saludar(){
    console.log(`hola ${this.nombre}`)
  }
}

const persona1 = new Persona('Gustavo')

// persona1.saludar()


class Trabajador extends Persona{
  constructor(nombre, ocupacion, edad){
    super(nombre, edad)
    this.ocupacion = ocupacion
  }
  
}


const persona2 = new Trabajador('Gustavo Rodriguez', 'Programador', 35)

console.log(persona2.edad)