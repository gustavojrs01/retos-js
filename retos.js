/****************
 * AÑO BISIESTO *
 ****************/
// export function isLeapYear(year) {
//   if ((year < 0) || !(Number.isInteger(year))){
//     return false
//   }
//   else {
//     if ((year % 100 === 0) && (year % 400 === 0)) {
//       return true
//     }
//     else if ((year % 4 === 0) && !(year % 100 === 0)) {
//       return true
//     }
//     else {
//       return false
//     }
//   }
// }

/*******************
 * TIPO DE MASCOTA *
 *******************/
// export function getPetExerciseInfo(type, age) {
//   switch (type) {
//     case 'perro':
//       if (age < 1) {
//         return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
//       }
//       else if (age >= 1 && age <= 7) {
//         return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego" 
//       }
//       else {
//         return "Los perros viejos necesitan caminatas más cortas"
//       }      
//     case 'gato':
//       if (age < 1) { 
//         return "Los gatitos necesitan frecuentes sesiones de juego"
//       }
//       else if (age >= 1 && age <= 7) {
//         return "Los gatos a esta edad necesitan jugar diariamente"
//       }
//       else {
//         return "Los gatos viejos necesitan sesiones de juego más cortas"
//       }       
//     case 'ave':
//       if (age < 1) {
//         return "Las aves jóvenes necesitan mucho espacio para volar"
//       }
//       else if (age >= 1 && age <= 7) {
//         return "Las aves necesitan jugar diariamente y un lugar para volar"
//       }
//       else {
//         return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"
//       }       
//     default:
//       return "Tipo de mascota inválida"
//   }
// }

/*************
 * TRIANGULO *
 *************/
// function printTriangle(size, character) {
    
//     let triangulo = ''
//     for (let i = 1; i <= size; i++) {
//         for (let j = 1; j <= size; j++) {
//             if (j <= (size - i)) {
//                 triangulo += ' '
//             }
//             else {
//                 triangulo += character
//             }            
//         }
//         if (i < size) {
//         triangulo += '\n'
//         }
//     }
//     return triangulo
// }
/*********************************
 * ENCUENTRA AL MICHI MAS FAMOSO *
*********************************/
// cats=[
//     {
//       name: "Luna",
//       followers: [500, 200, 300]
//     },
//     {
//       name: "Michi",
//       followers: [200, 2200]
//     },
//     {
//         name: "Pedro",
//         followers: [200, 2200]
//     }
//   ]
// function findFamousCats(cats) {
//     let michis = []
//     let masSeguidores = 0
//     for (cat of cats) {
//         let maximo = cat.followers.reduce(function (acumulador, numero){
//             return acumulador + numero
//         },0)
//         if (maximo === masSeguidores) {
//             michis.push(cat.name)
//             masSeguidores = maximo
//         }
//         else if (maximo > masSeguidores) {
//             michis = []
//             michis.push(cat.name)
//             masSeguidores = maximo
//         }else {
//             continue
//         }	

//     }
//     console.log(michis)
//     return michis
//   }
//   findFamousCats(cats)

/************************
 * PROMEDIO DE LA CLASE *
 ************************/

// students = [
//     {
//       name: "Pedro",
//       grades: [90, 87, 88, 90],
//     },
//     {
//       name: "Jose",
//       grades: [99, 71, 88, 96],
//     },
//     {
//       name: "Maria",
//       grades: [92, 81, 80, 96],
//     },
//   ]


// function getStudentAverage(students) {
//   let promedios = []
//   let estudiantes = []
  
//     students.forEach(estudiante => {
//       let promedioEstudiante = parseFloat(((estudiante.grades.reduce((a,b)=>a+b , 0)) / estudiante.grades.length).toFixed(2))
//       promedios.push(promedioEstudiante)
//       let statsEstudiante = {
//           name:estudiante.name,
//           average:promedioEstudiante
//       }
//       estudiantes.push(statsEstudiante)
//     })    
//     let promedioClase = parseFloat((promedios.reduce((a,b)=>a+b,0)/promedios.length).toFixed(2))
//     let stats = {
//       classAverage: promedioClase,
//       students: estudiantes
//     }    
//     return stats
// }

// getStudentAverage(students)

//platzi
// export function getStudentAverage(students) {
//   let promedios = []
//   let estudiantes = []
//   students.forEach(estudiante => {
//     let promedioEstudiante = parseFloat(((estudiante.grades.reduce((a, b) => a + b, 0)) / estudiante.grades.length).toFixed(2))
//     promedios.push(promedioEstudiante)
//     let statsEstudiante = {
//       name: estudiante.name,
//       average: promedioEstudiante
//     }
//     estudiantes.push(statsEstudiante)
//   })
//   let promedioClase = parseFloat((promedios.reduce((a, b) => a + b, 0) / promedios.length).toFixed(2))
//   let stats = {
//     classAverage: promedioClase,
//     students: estudiantes
//   }
//   return stats
// }

/************************
 * PALINDROMO MAS LARGO *
 ************************/
// const words = ["racecar", "level", "world", "hello", "madam", "repaper"]

// function findLargestPalindrome (words){
//     //almacena el palindromo mas largo
//     let palindromoSupremo = ""
//     //recorre el arreglo de palabras
//     words.forEach(word => {
//         //evalua si la palabra puede ser un palindromo
//         if (word[0] === word[word.length-1]){
//             //evalua si es un palindromo
//             //recorro la palabra caracter por caracter
//             for (let i = 1;i < word.length;i++){
//                 //evalua si la letra en la posicion i es igual a la letra en la posicion (largo-i-1)
//                 if (word[i] === word[word.length-i-1]){
//                     //si es el ultimo caracter
//                     if (i == word.length-1){
//                         //si la palabra es mas larga que el ultimo palindromo almacenado, guarda el nuevo valor
//                         if (word.length > palindromoSupremo.length){
//                             palindromoSupremo=""
//                             palindromoSupremo= word
//                         }
//                     }
//                 }
//             }
//         }
//     } )
//     if (palindromoSupremo === "" ){
//         palindromoSupremo = null
//         console.log(palindromoSupremo)
//     }else {
//         console.log(palindromoSupremo)
//     }
//     return palindromoSupremo
// }
// findLargestPalindrome(words)

/***************
 * CALCULADORA *
 ***************/
// export function createCalculator() {
//     let total = 0
//     return {
//       add: (num) => total += num,
//       subtract: (num) => total -= num,
//       multiply: (num) => total *= num,
//       divide: (num) => total /= num,
//       clear: () => total = 0,
//       getTotal: () => total
//     }
//   }
/****************
 * TASK PLANNER *
 ****************/
// function createTaskPlanner() {
//       let tasks = []
//   return {
//     addTask(task) {
//       task.completed = false
//       tasks.push(task)
//     },
//     removeTask(value) {
//       if (typeof value === "number") {
//         tasks = tasks.filter((task) => task.id !== value)
//       }
//       else {
//         tasks = tasks.filter((task)=> task.name !== value)
//         // const index = tasks.findIndex(obj => obj.nombre == value)
//         // if (index !== -1) {
//         //   tasks.splice(index, 1)
        
//       }
//     },
//     getTasks() {
//       return tasks
//     },
//     getPendingTasks() {
//       return tasks.filter((task) => !task.completed)
//     },
//     getCompletedTasks() {
//       return tasks.filter((task) => task.completed)
//     },
//     markTaskAsCompleted(value) {
//       let index
//       if (typeof value === "number") {
//         index = tasks.findIndex((task) => task.id === value)
//       }
//       else {
//         index = tasks.findIndex((task) => task.name === value)
//       }
//       tasks[index].completed = true
//     },
//     getSortedTasksByPriority() {
//       const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority)
//       return sortedTasks
//     },
//     filterTasksByTag(tag) {
//       return tasks.filter((task) => task.tags.includes(tag))
//     },
//     updateTask(taskId, updates) {
//       const index = tasks.findIndex((task) => task.id === taskId)
//       tasks[index] = { ...tasks[index], ...updates }
//     }
//   }
// }
/******************************************
 * BUSCAR PERSONA EN UN ARREGLO DE OBJETO *
 ******************************************/
// const personas = []

// const crearPersona = (nombre, edad) => {
//     const persona = {
//         nombre: nombre, 
//         edad: edad 
//     }
//     personas.push(persona)
// }


// crearPersona('Gustavo Rodriguez',35)
// crearPersona('Pedro Rodriguez',40)
// crearPersona('Gabriela Perez',31)
// crearPersona('Elvira Alvarez',31)

// const mostrarPersonas = () => {
//     personas.forEach( persona => {
//         if (personas.indexOf(persona)===0){
//             console.log(`Esta es una persona ${persona.nombre}`)
//         }
//         else if (personas.indexOf(persona) === personas.length-1){
//             console.log(`Esta es la ultima persona ${persona.nombre}`)
//         }
//         else {
//             console.log(`Esta es otra persona ${persona.nombre}`)
//         }
//     } )
// }


// const mostrarUltimoRegistro = () =>{
//     const index = personas.length-1    
//     return personas[index]
// }

// console.log(mostrarUltimoRegistro())

// const buscar = (valor) => {
//     let res = personas.find(persona => persona.nombre === valor)
//     if (res === undefined){
//         console.log('No se ha encontrado')
//     }
//     else{
//         console.log(res)
//     }
// }

// mostrarPersonas()
// buscar('Gustavo')
/***************
 * ASYNC-AWAIT *
 ***************/
// const data = [
//     {
//         id:1,
//         name:'Gustavo'
//     },
//     {
//         id:2,
//         name:'Victoria'
//     }
// ]


// const getData = () => new Promise((resolve, reject)=>{
//     if (data.length === 0) {
//         reject(new Error('Data is empty'))
//     }
//     setTimeout(()=>{
//         resolve(data)
//     }, 2000)
// })

// // getData()
// //     .then((response)=>{
// //         console.log(response)
// //     })
// //     .catch((error)=>{
// //         console.log(error.message)
// //     })

// async function fetchedData(){
//     const personas = await getData()
//     console.log(personas)
// }

// fetchedData()
/****************************
 * FUNCION MAIL CON PROMISE *
 ****************************/
// export function sendEmail(email = "", subject = "", body = "") {
//     const mail = {
//       email: email,
//       subject: subject,
//       body: body
//     }
//     return new Promise((resolve, reject) => {
//       if (mail.email === "" || mail.subject === "" || mail.body === "") {
//         reject(new Error('No se puede enviar, faltan parametros'))
//       }
//       else {
//         window.setTimeout(() => {
          
//           resolve(mail)
//         }, 2000)
//       }
//     })
//   }
/***************************
 * FUNCION MAIL OPTIMIZADA *
 ***************************/
// function sendEmail(email, subject, body){
//     return new Promise((resolve, reject)=>{
//         const message = 'Error: Hacen falta campos para enviar el mail'
//         window.setTimeout(()=>{
//             [email,subject,body].filter(Boolean).length === 3
//                 ? resolve({email, subject, body})
//                 : reject(new Error(message))
//         }, 2000)
//     })
// }
/**********************
 * CALLBACK A PROMISE *
 **********************/
// export function doTask1() {
//     return new Promise((resolve) => {
//       window.setTimeout(() => resolve('Task 1'), 300)
//     })
//   }
  
//   export function doTask2() {
//     return new Promise((resolve) => {
//       window.setTimeout(() => resolve('Task 2'), 300)
//     })
//   }
  
//   export function doTask3() {
//     return new Promise((resolve) => {
//       window.setTimeout(() => resolve('Task 3'), 300)
//     })
//   }
// import { doTask1, doTask2, doTask3 } from './tasks';

// export function runCode() {
//   const strings = [];
//   return new Promise((resolve) => {
//     doTask1()
//       .then(res => {
//         strings.push(res)
//         return doTask2()
//       })
//       .then(res => {
//         strings.push(res)
//         return doTask3()
//       })
//       .then(res => {
//         strings.push(res)
//         resolve(strings)
//       })
//   })
/**********************
 * USANDO ASYNC AWAIT *
 **********************/
// import { doTask1, doTask2, doTask3 } from './tasks';

// export async function runCode() {
//   return [await doTask1(), await doTask2(), await doTask3()]
// }
/****************************
 * VALIDAR USUARIO POR MAIL *
 ****************************/
// export function validateForm(formData, registeredUsers) {
//     const data = [formData]
//     let camposFaltantes = []  
//     if (!data.every(e => e.hasOwnProperty('name'))) {
//       camposFaltantes.push('name')
//     }
//     if (!data.every(e => e.hasOwnProperty('lastname'))) {
//       camposFaltantes.push('lastname')
//     }
//     if (!data.every(e => e.hasOwnProperty('email'))) {
//       camposFaltantes.push('email')
//     }
//     if (!data.every(e => e.hasOwnProperty('password'))) {
//       camposFaltantes.push('password')
//     }  
//     if (camposFaltantes.length > 0) {
//       throw new Error(`Faltan los siguientes campos:${camposFaltantes}`)
//     }
//     else {
//       if (registeredUsers.find(e => {
//         return e.email === data[0].email
//       })) {
//         throw new Error(`El email ingresado ya existe: ${data[0].email}`)
//       }
//       else {
//         registeredUsers.push(
//           {
//             name: formData.name,
//             lastname: formData.lastname,
//             email: formData.email
//           }
//         )
//         return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`
//       }
//     }  
//   }
/*******************************************
 * AGRUPA PRODUCTOS POR UNA CATEGORIA DADA *
 *******************************************/
// export function groupProducts(products, category) {
//     let filteredProducts = []
//     let price = 0
  
//     products.map(prod => {
//       if (category.toLowerCase() === prod.category.toLowerCase()) {
//         filteredProducts.push(prod.name)
//         price += prod.price
//       }
  
  
//     })
  
//     return {
//       products: filteredProducts.join(', '),
//       totalPrice: price
//     }
//   }
/**********************
 * VERSION OPTIMIZADA *
 **********************/
// export function groupProducts(products, category) {
//     const filtered = products.filter(product => product.category === category);
//     return {
//       products: filtered.map(product => product.name).join(", "),
//       totalPrice: filtered.reduce((acc, val) => acc.price + val.price)
//     }
//   }
/*******************************
 * UBICACION DEL VALOR BUSCADO *
 *******************************/
// export function searchValue(array, value) {
//     let row
//     let column
//     if (!array.flat().includes(value)) {
//       throw new Error("Valor no encontrado")
//     }
//     else {
//       for (let i = 0; i < array.length; i++) {
//         if (array[i].includes(value)) {
//           row = i
//           column = array[i].indexOf(value)
//         }
//       }
//     }
//     return {
//       row,
//       column
//     }
//   }
/**************
 * OPTIMIZADO *
 **************/
// export function searchValue(array, value)
// {
//   let flat = array.flat(1).includes(value);
//   if (!flat)
//     throw new Error("Valor no encontrado");

//   let rta;
//   const result = array.map((array, index) => {
//     if (array.includes(value))
//       rta = { row: index, column: array.indexOf(value) }
//   });
//   return rta;
// }
/*********************************
 * MODIFICA UNA LISTA DE COMPRAS *
 *********************************/
// export function processShoppingList(list) {
//     let total = 0
//     list = list.map((obj) => {
//       if (obj.name.includes('oferta')) {
//         obj.price *= 0.8
//       }
//       total += (obj.price * obj.quantity)
//       obj.price *= obj.quantity
//       delete obj.quantity
//       return obj
//     })
//     return total
//   }
/****************************************************
 * ORDENA LOS PRODUCTOS POR PRECIO Y DISPONIBILIDAD *
 ****************************************************/
// export function sortByAvailabilityAndPrice(products) {
//     return [...products].sort((a, b) => a.price - b.price).sort((a, b) => b.inStock - a.inStock)
//   }
/****************
 * HOTEL SYSTEM *
 ****************/
// function hotelSystem(rooms) {
//     let hotelRooms=[]
//     let reservaciones =[]
//     //Crea un array con las habitaciones
//     const crearRooms = ()=>{
//       for (let i = 1;i <= rooms;i++){
//         const room = {
//           roomNumber: i,
//           reservs:[]        
//         }
//         hotelRooms.push(room)
//       }
//     }
//     crearRooms()
//     //Formatea la fecha de DD/MM a MM/DD y devuelve un objeto DATE
//     const formatearFecha = date=> new Date(date.split('/').reverse().join('/'))  
//     //Devuelve las habitaciones
//     const getRooms = ()=> hotelRooms
//     //Devulve el objeto de la habitacion recibiendo el Nro de habitacion
//     const getRoom = (room)=>{    
//       if ((room < 1) || (room > hotelRooms.length)){
//         throw new Error('La habitacion no existe')      
//       }
//       return hotelRooms[room-1]
//     }
//     //Devulve la reservacion por ID  
//     const searchReservation = (id)=>{
//         const reservacion = reservaciones.find(res=>res.id===id)
//         if (reservacion) {
//             return reservacion
//         }
//         else throw new Error("La reservación no fue encontrada")        
//     }
//     //Devuelve las reservaciones ordenadas de menor a mayor
//     const getSortReservations = ()=>{
//       const resOrdenadas = [...reservaciones].sort((res1,res2)=>{
//         res1 = formatearFecha(res1.checkIn)
//         res2 = formatearFecha(res2.checkIn)
//         if (res1 > res2){
//           return 1
//         }
//         if (res1 < res2){
//           return -1
//         }
//         return 0        
//       })
//       return resOrdenadas
//     }
//     const addReservation = (reservation)=>{
//       let {id, checkIn, checkOut, roomNumber, name} = reservation
//       checkIn = formatearFecha(checkIn)
//       checkOut = formatearFecha(checkOut)
//       const reservacionesActuales = [...reservaciones]
//       const room = getRoom(roomNumber) 
//       if (reservacionesActuales.find(res => res.id === id)){
//         throw new Error('El id ya existe')
//       }
//       if (checkIn>checkOut){
//         throw new Error('El checkOut ingresado es inferior a la fecha de checkIn')
//       }
//       if (room.reservs.length === 0){
//         hotelRooms[roomNumber-1].reservs.push({
//           id,
//           checkIn,
//           checkOut,
//           name
//         })
//         reservaciones.push(reservation)
//       }
//       else{      
//         room.reservs.forEach(res=>{
//           if((checkIn >= res.checkIn) && (checkIn <= res.checkOut)  ){
//             throw new Error('No disponible para esa fecha')                  
//           }
//           if((checkIn < res.checkIn) && (checkIn <= res.checkOut)  ){
//             throw new Error('No disponible para esa fecha')                  
//           }
//           hotelRooms[roomNumber-1].reservs.push({
//             id,
//             checkIn,
//             checkOut,
//             name
//           })
//           reservaciones.push(reservation)
//         })
//       }
//       return "Reservacion agregada" 
//     }
//     const getReservations = ()=> reservaciones  
//     const removeReservation = (id)=>{
//       const reserva = reservaciones.some(res=>res.id === id)    
//       if (!reserva){
//         throw new Error('El ID ingresado no existe')
//       }
//       const reservacion = [...reservaciones].filter(res=>res.id===id)[0]
//       reservaciones = reservaciones.filter((res)=>res.id !==id)
//       return reservacion
//     }  
//     const getAvailableRooms = (checkIn, checkOut)=>{
//       checkIn = formatearFecha(checkIn)
//       checkOut = formatearFecha(checkOut)       
//       const sinReservas = [...hotelRooms].filter(room=>room.reservs.length===0).map(reserv=>reserv.roomNumber)
//       const conReservas =  [...hotelRooms].filter(room=>room.reservs.some(res => {
//         if ( checkIn < res.checkIn && checkOut<=res.checkIn){
//           return true
//         }
//         if (checkIn>=res.checkOut){
//           return true
//         }
//         return false
//       })).map(reserv => reserv.roomNumber)
//       return sinReservas
//       // return [...conReservas,...sinReservas] SOLUCION REAL
//     }
//     return {
//         searchReservation,
//         getSortReservations,
//         getRooms,
//         addReservation,
//         getRoom,
//         getReservations,
//         removeReservation,
//         getAvailableRooms
//     }   
//   }
/************************************
 * CONGELA EL OBJETO RECURSIVAMENTE *
 ************************************/
// export function protectDog(dog) {
  
//     const protectedDog = Object.assign({}, dog)
//     Object.freeze(protectedDog)
//     for (let x in protectedDog) {
//       if (typeof protectedDog[x] === 'object') {
//         Object.freeze(protectedDog[x])
//       }    
//     }
//     return protectedDog
//   }
/***********************************
 * MODIFICA EL PROTOTYPE DE ARRAYS *
 ***********************************/
// function arrayModified() {
//     Array.prototype.myFilter = function (fn){
//       let rta = []
//       for (let item of this){
//         if (fn(item)){
//           rta.push(item)
//         }
//       }    
//       return rta    
//     }  
//   }
/******************************
 * CREA UN AUTO USANDO CLASES *
 ******************************/
// export class Car {
//     constructor(brand, model, year, mileage) {
//       this.brand = brand
//       this.model = model
//       this.year = year
//       this.mileage = mileage
//       this.state = false
//     }
//     turnOn() {
//       this.state = true
//       console.log('El auto está encendido')
//     }
//     turnOff() {
//       this.state = false
//       console.log('El auto está apagado')
//     }
//     drive(kilometers) {
//       if (this.state === false) throw new Error('El auto está apagado')
//       this.mileage += kilometers
//     }
//   }
/*********************************
 * CARRITO DE COMPRAS CON CLASES *
 *********************************/
// import { Product } from "./product";

// export class Article extends Product {
//   constructor(name, price, quantity) {
//     super(name, price, quantity)
//   }
//   addToCart() {
//     return `Agregando ${this.quantity} unidades del articulo ${this.name}`
//   }
// }

// export class Service extends Product {
//   constructor(name, price, quantity) {
//     super(name, price, quantity)
//   }
//   addToCart() {
//     return `Agregando el servicio ${this.name} al carrito`
//   }
// }

// export class Cart {
//   products=[]
//   addProduct(product) {
//     this.products.push(product)
//     return product.addToCart()
//   }
//   deleteProduct(product) {
//     this.products = this.products.filter(prod => prod.name !== product.name)
//     return 'Registro eliminado'
//   }
//   calculateTotal() {
//     return this.products.reduce((a,b)=>a+b.price*b.quantity , 0)
//   }
//   getProducts() {
//     return this.products
//   }
// }
/**************************************
 * ENCAPSULANDO DATOS DE LOS USUARIOS *
 **************************************/
// export class User {
//     constructor(name, age) {
//       this._name = name
//       this._age = age
//       this._friends = []
//       this._messages = []
//     }
//     addFriend(friend) {
//       this._friends.push(friend)
//     }
//     sendMessage(message, friend) {
//       this._messages.push(message)
//       friend._messages.push(message)
//     }
//     showMessages() {
//       return this._messages
//     }
//     get name() {
//       return this._name
//     }
//     set name(name) {
//       this._name = name
//     }
//     get age(){
//       return this._age
//     }
//     set age(age) {
//       this._age = age
//     }
//   }
// JERARQUIA DE ANIMALES
// export class Animal {
//     constructor(name, age, specie) {
//       this.name = name
//       this.age = age
//       this.specie = specie
//     }
//     getInfo() {
//       return this
//     }
//   }
  
//   export class Mammal extends Animal {
//     constructor(name, age, specie, hasFur) {
//       super(name, age, specie)
//       this.hasFur = hasFur
//     }
//     getInfo() {
//       return {...this, ...this.hasFur}
//     }
//   }
//   export class Dog extends Mammal {
//     constructor(name, age, breed, hasFur, specie = 'dog') {
//       super(name, age, specie, hasFur)
//       this.breed = breed
//     }
//     getInfo() {
//       return this
//     }
//     bark() {
//       return 'woof!'
//     }
//   }
/********************
 * AGENDA DE VUELOS *
 ********************/
// economicFlights.js
// import { Flight } from "./Flight";
// import { Reservation } from "./Reservation";

// export class EconomicFlight extends Flight {
//   constructor(origin, destination, date, capacity, price) {
//     super(origin, destination, date, capacity, price);
//   }
//   sellTicket(passenger) {
//     if (this.capacity > 0) {
//       if (passenger.age < 18 || passenger.age > 65) {
//         this.price = this.price * 0.8;
//       }      
//     }    
//     return super.sellTicket(passenger)
//   }
// }
// FLight.js
// import { Reservation } from "./Reservation";
// export class Flight {
//   constructor(origin, destination, date, capacity, price) {
//     this.origin = origin;
//     this.destination = destination;
//     this.date = date;
//     this.capacity = capacity;
//     this.price = price;
//     this.passengers = [];
//   }

//   sellTicket(passenger) {
//     if (this.capacity > 0) {
//       this.passengers.push({
//         fullName: `${passenger.name} ${passenger.lastname}`,
//         age: passenger.age
//       });
//       passenger.addFlight(this);
//       this.capacity--;
//       let reservation = new Reservation(this, passenger);
//       return reservation;    
//     } 
//   }
// }
// Passenger.js
// export class Passenger {
//     constructor(name, lastname, age){
//       this.name = name;
//       this.lastname = lastname;
//       this.age = age;
//       this.flights = [];
//     }
  
//     addFlight(flight) {
//       this.flights.push({
//         origin: flight.origin,
//         destination: flight.destination,
//         date: flight.date,
//         price: flight.price
//       });
//     }
//   }
// PremiunFlight.js
// import { Flight } from "./Flight";
// export class PremiumFlight extends Flight {
//   constructor(origin, destination, date, capacity, price, specialService) {
//     super(origin, destination, date, capacity, price)
//     this.price = price + specialService
//   }
// }
// Reservation.js
// export class Reservation {
//     constructor(flight, passenger) {
//       this.flight = flight;
//       this.passenger = passenger;
//     }
  
//     reservationDetails() {
//       return {
//         origin: this.flight.origin,
//         destination: this.flight.destination,
//         date: this.flight.date,
//         reservedBy: `${this.passenger.name} ${this.passenger.lastname}`
//       };
//     }
//   }
/************************
 * SINGLETON EN UN CHAT *
 ************************/
// import { User } from "./user";

// export class Chat {

//   constructor() {
//     if (!Chat.instance) {
//       this.users = [];
//       Chat.instance = Object.freeze(this);
//     }
//       return Chat.instance;
//   }
//   sendMessage(message) {
//     this.users.forEach(user => user.receiveMessage(message));
//   }
//   addUser(user) {
//     if (user instanceof User) {
//       this.users.push(user)
//     }
//   }
//   removeUser(name) {
//     const index = this.users.findIndex(user => user.name === name);
//     this.users.splice(index, 1);
//   }
// }
/***************************************
 * PERSONALIZA PRODUCTOS DE UNA TIENDA *
 ***************************************/
// ShipingInsurance.js

// import { Product } from "./product";

// export class ShippingInsuranceDecorator extends Product {
//   constructor(product) {
//     super();
//     this.product = product;
//   }

//   getPrice() {
//     return this.product.getPrice() + 20
//   }

//   getDescription() {
//     return this.product.getDescription() + ' con seguro de envío'
//   }
// }
// WarrantyDecorator.js
// import { Product } from "./product";

// export class WarrantyDecorator extends Product {
//   constructor(product) {
//     super();
//     this.product = product 
//   }

//   getPrice() {
//     return this.product.getPrice() + 20
//   }

//   getDescription() {
//     return this.product.getDescription() + ' con garantía'
//   }
// }
// Excercise.js
// import { Product } from "./product";

// export class BasicProduct extends Product {
//   constructor(price, description) {
//     super(price);
//     this.price = price;
//     this.description = description;
//   }

//   getDescription() {
//     return this.description;
//   }
// }
// Product.js
// export class Product {
//     // Este código no debe ser editado ❌
//     constructor(price) {
//       this.price = price;
//     }
  
//     getPrice() {
//       return this.price;
//     }
  
//     getDescription() {
//       throw new Error("Este método debe ser implementado en las subclases");
//     }
//   }
/*******************************************
 * MEJORA EL CÓDIGO USANDO BUILDER PATTERN *
 *******************************************/
// export class CarBuilder {
//     // Tu código aquí 👇
//     constructor(year, model, brand, color, price, isAvailable) {
//       this.year = 0;
//       this.model = '';
//       this.brand = '';
//       this.color = '';
//       this.price = 0;
//       this.isAvailable = false;
//     }
  
//     setYear(year) {
//       this.year = year;
//       return this;
//     }
//     setModel(model) {
//       this.model = model;
//       return this;
//     }
//     setBrand(brand) {
//       this.brand = brand;
//       return this;
//     }
//     setColor(color) {
//       this.color = color;
//       return this;
//     }
//     setPrice(price) {
//       this.price = price;
//       return this;
//     }
//     setIsAvailable(isAvailable) {
//       this.isAvailable = isAvailable;
//       return this;
//     }
//     build() {
//       return {
//         year: this.year,
//         model: this.model,
//         brand: this.brand,
//         color: this.color,
//         price: this.price,
//         isAvailable: this.isAvailable
//       }
//     }
//   }
/***********************************
 * PROXY EN SERVICIO DE MENSAJERÍA *
 ***********************************/
// User.js
// export class User {
//     constructor(name) {
//       this.name = name;
//       this.isLogin = false;
//     }
  
//     login() {
//       this.isLogin = true;
//     }
  
//     logout() {
//       this.isLogin = false;
//     }
  
//     isLoggedIn() {
//       return this.isLogin;
//     }
//   }
// Exercise.js
// export class MessagesProxy {
//     constructor(messages, user) {
//       this.messages = messages;
//       this.user = user;
//     }
  
//     sendMessage(text) {
//       if (!this.user.isLoggedIn()) {
//         throw new Error('Usuario no registrado')
//       }
//       this.messages.sendMessage(text);
//     }
  
//     getHistory() { 
//       if (!this.user.isLoggedIn()) {
//         throw new Error('Usuario no registrado')
//       }
//       return this.messages.getHistory();
//      }
//   }
// MessagesProxy.js
// export class Messages {
//     // No debes editar este código ❌
//     constructor() {
//       this.history = [];
//     }
  
//     sendMessage(text) {
//       this.history.push(text);
//     }
  
//     getHistory() {
//       return this.history;
//     }
//   }
/**********************************************
 * IMPLEMENTACIÓN DE OBSERVADOR EN NEWSLETTER *
 **********************************************/
// Subscriber.js
// export class Subscriber {
//     constructor(email) {
//       this.email = email;
//     }  
//     receive(article) {
//       console.log(`El suscriptor ${this.email} ha recibido el articulo: ${article.title}`)
//     }
//   }
// Exercise.js
// export class Newsletter {
//     constructor() {
//       this.subscribers = [];    
//     }
//     subscribe(subscriber) {
//       this.subscribers.push(subscriber);
//     }
  
//     unsubscribe(email) {
//       const index = this.subscribers.findIndex(sub=>sub.email === email)
//       if (index !== -1) {
//         this.subscribers.splice(index, 1);
//       }
//     }
//     post(article) {
//       this.subscribers.forEach(sub => {
//         sub.receive(article)
//       })
//     }
//   }
/*********************************************
 * CREA TU PROPIA IMPLEMENTACIÓN DE UN ARRAY *
 *********************************************/
// export class MyArray {
//     constructor() {
//       this.data = {};
//       this.length = 0;
//     }
  
//     map(func) {
//       let newData = new MyArray;
//       for (let item in this.data) {
//         newData.data[item] = func(this.data[item]);
//         newData.length++;
//       }
//       return newData;
//     }
  
//     filter(func) {
//       let filtro = new MyArray;
//       for (let item in this.data) {
//         if (func(this.data[item])) {
//           filtro.data[filtro.length] = this.data[item];
//           filtro.length++;
//         }
//       }
//       return filtro;
//     }
  
//     push(item) {
//       this.data[this.length] = item;
//       this.length++;
//     }
  
//     pop() {
//       const borrar = this.data[this.length - 1]
//       delete this.data[this.length - 1];
//       this.length--;
//       return borrar;
//     }
  
//     join(character = ",") {
//       let cadena = "";
//       for (let i = 0; i < this.length; i++){
//         if (i < this.length - 1) {
//           cadena += this.data[i] + character
//         }
//         else {
//           cadena += this.data[i]
//         } 
//       }
//       return cadena;
//     }
  
//     shift() {
//       const borrar = this.data[0]
//       delete this.data[0]
//       this.length--;
//       for (let i = 0; i < this.length; i++) {
//         this.data[i] = this.data[i + 1]
//       }
//       delete this.data[this.length]
//       return borrar;
//     }
  
//     unshift(item) {
//       if (!item && item !== 0) { return this.length }
//       for (let i = this.length; i >= 0; i--) {
//         this.data[i] = this.data[i - 1]
//       }
//       this.data[0] = item
//       this.length++
//       console.log(this)
//       return this.length
//     }
    
//   }
/**************************************************
 * IMPLEMENTACIÓN DE UNA HASHTABLE PARA CONTACTOS *
 **************************************************/
// export class ContactList {
//   constructor(size) {
//     this.buckets = new Array(size);
//     this.numBuckets = this.buckets.length;
//   }

//   hash(name) {
//     let total = 0;
//     for (let i = 0; i < name.length; i++) {
//       total += name.charCodeAt(i);
//     }
//     return total % this.numBuckets;
//   }

//   insert(name, phone) {
//     const index = this.hash(name);
//     if (!this.buckets[index]) {
//       this.buckets[index] = [];
//     }
//     this.buckets[index].push([name, phone]);
//   }

//   get(name) {
//     const index = this.hash(name);
//     if (!this.buckets[index]) {
//       return null;
//     }
//     for (let i = 0; i < this.buckets[index].length; i++) {
//       if (this.buckets[index][i][0] === name) {
//         return this.buckets[index][i][1];
//       }
//     }    
//   }

//   retrieveAll() {
//     let allValues = [];
//     for (let i = 0; i < this.numBuckets; i++) {
//       if (this.buckets[i]) {
//         for (let j = 0; j < this.buckets[i].length; j++) {
//           allValues.push(this.buckets[i][j]);
//         }
//       }
//     }
//     return allValues;
//   }

//   delete(name) {
//     const index = this.hash(name);
//     if (!this.buckets[index]) {
//       return null;
//     }
//     this.buckets.splice(index, 1);
//   }
// }
/***********************************
 * REMUEVE DUPLICADOS DE UNA LISTA *
 ***********************************/
// export function removeDuplicates(values) {
//   let set = new Set(values)
//   return [...set]
// }
/*********************************
 * CREA UN ORGANIZADOR DE TAREAS *
 *********************************/
// export function taskManager() {
//   const tasks = new Map();
//   return {
//     addTask(task, tags) {
//       const taskmin = task.toLowerCase();
//       if (!tasks.has(taskmin)) {
//         tasks.set(taskmin, new Set(tags));
//       }
//       else {
//         tags.forEach(tag => tasks.get(task).add(tag));
//       }      
//     },
//     printTasks() {
//       return tasks;
//     }
//   }
// }