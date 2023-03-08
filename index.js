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

students = [
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    },
  ]


function getStudentAverage(students) {
    let promedios = []
    let res = []
     students.forEach(estudiante => {
        let promedioEstudiante = (estudiante.grades.reduce((a,b)=>a+b , 0)) / estudiante.grades.length
        promedios.push(promedioEstudiante)
        let statsEstudiante = {
            name:estudiante.name,
            promedio:promedioEstudiante
        }
        res.push(statsEstudiante)
     })
     res
     console.log(res)
     console.log(promedios)
}

getStudentAverage(students);
