

class Trabajador extends Persona{
  constructor(nombre, ocupacion, edad){
    super(nombre, edad)
    this.ocupacion = ocupacion
  }
  
}


const persona2 = new Trabajador('Gustavo Rodriguez', 'Programador', 35)

console.log(persona2.edad)