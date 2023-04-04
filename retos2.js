class Car {
  constructor(brand, model, year, mileage) {
    this.brand = brand
    this.model = model
    this.year = year
    this.mileage = mileage
    this.state = false
  }
  turnOn() {
    this.state = true
    console.log('El auto esta encendido')
  }
  turnOff(){
    this.state = false
    console.log('El auto está apagado')
  }
  drive(kilometers){
    if (this.state === false) throw new Error('El auto esta apagado')
    this.mileage += kilometers  
  }
}


const auto = new Car('Toyota', 'Corola', 2023, 0)

auto.turnOn()

// auto.turnOff()

auto.drive(100)

console.log(auto.mileage)
auto.drive(100)
auto.drive(100)
console.log(auto.mileage)
