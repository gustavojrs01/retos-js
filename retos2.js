

// hotel.addReservation({
//   id: 1,
//   name: "John Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 1,
// });

// hotel.addReservation({
//   id: 2,
//   name: "Pepe Doe",
//   checkIn: "01/01",
//   checkOut: "02/01",
//   roomNumber: 7,
// });


function hotelSystem(rooms) {
  const hotelRooms=[]
  const crearRooms = ()=>{
    for (let i = 1;i <= rooms;i++){
      room = {
        roomNumber: i,
        reservs:[]        
      }
      hotelRooms.push(room)
    }
  }
  const formatearFecha = (date)=>{
    const dateOriginal = date.split('/')
    const mes = parseInt(dateOriginal[1])
    const dia = parseInt(dateOriginal[0])
    const anio = new Date()
    const newDate = new Date(`${mes}-${dia}-${anio.getFullYear()}`)
    return newDate
  }
  crearRooms()
  //room para test en la nro 1
  // hotelRooms[0].reservs.push({
  //   id:1,
  //   checkIn:formatearFecha('10/01'),
  //   checkOut:formatearFecha('15/01')
  // })

  let reservaciones =[
    // {
    //   id: 1,
    //   name: "John Doe",
    //   checkIn: "10/01",
    //   checkOut: "12/01",
    //   roomNumber: 1,
    // },
    // {
    //   id: 111,
    //   name: "John Doe",
    //   checkIn: "01/01",
    //   checkOut: "02/01",
    //   roomNumber: 1,
    // }
  ]

  const getRooms = ()=>{
    // console.log(hotelRooms[0].reservs[0])
    // console.log(hotelRooms[0].reservs[0].checkIn)
    // console.log(formatearFecha('14/01'))
    // console.log(formatearFecha('14/01'))
    // if((formatearFecha('14/01') >= hotelRooms[0].reservs[0].checkIn) && (formatearFecha('14/01') <= hotelRooms[0].reservs[0].checkOut) ){
    //   console.log('La fecha esta dentro del rango, deberia dar error')
    // }
    return hotelRooms
  }

  const getRoom = (room)=>{
    
    if ((room < 1) || (room > hotelRooms.length)){
      throw new Error('La habitacion no existe')      
    }
    return hotelRooms[room-1]
  } 
  
  const searchReservation = (id)=>{
      const reservacion = reservaciones.find((x)=>x.id===id)
      if (reservacion) {
          return reservacion
      }
      else throw new Error("La reservación no fue encontrada")        
  }
  const getSortReservations = ()=>{
    const resOrdenadas = [...reservaciones].sort((res1,res2)=>{
      res1 = formatearFecha(res1.checkIn)
      res2 = formatearFecha(res2.checkIn)
      if (res1 > res2){
        return 1
      }
      if (res1 < res2){
        return -1
      }
      return 0        
    })
    return resOrdenadas
  }
  const addReservation = (reservation)=>{
    const {id, checkIn, checkOut, roomNumber, name} = reservation    
    const reservacionesActuales = [...reservaciones]
    const room = getRoom(roomNumber)
    console.log(id, checkIn, checkOut, roomNumber, name)    
    if (reservacionesActuales.find(res => res.id === id)){
      throw new Error('El id ya existe')
    }
    if (formatearFecha(checkIn)>formatearFecha(checkOut)){
      throw new Error('El checkOut ingresado es menor a la fecha de checkIn')
    }
    // console.log(room.reservs)
    if (room.reservs.length === 0){
      hotelRooms[roomNumber-1].reservs.push({
        id,
        checkIn:formatearFecha(checkIn),
        checkOut:formatearFecha(checkOut),
        name
      })
      reservaciones.push(reservation)
    }
    else{
      
      room.reservs.forEach(res=>{
        if((formatearFecha(checkIn) >= res.checkIn) && (formatearFecha(checkIn) <= res.checkOut)  ){
          throw new Error('No disponible para esa fecha')                  
        }
        if((formatearFecha(checkIn) < res.checkIn) && (formatearFecha(checkIn) <= res.checkOut)  ){
          throw new Error('No disponible para esa fecha')                  
        }
        // else {
          hotelRooms[roomNumber-1].reservs.push({
            id,
            checkIn:formatearFecha(checkIn),
            checkOut:formatearFecha(checkOut),
            name
          })
          reservaciones.push(reservation)
          console.log('Reservacion agregegada')
        // }
      })
      console.log('estoy en el else')
    } 
  }

  return {
      searchReservation,
      getSortReservations,
      getRooms,
      addReservation,
      getRoom
  }   
}

const hotel = hotelSystem(10);

// console.log(hotel.getRooms())

// console.log(hotel.getSortReservations())
// console.log(hotel.getSortReservations())
// console.log(hotel.getRooms())
// hotel.addReservation({
//   id: 16,
//   name: "John Doe",
//   checkIn: "15/01",
//   checkOut: "17/01",
//   roomNumber: 1,
// })




// const buscar = (valor) => {
//     let res = personas.find(persona => persona.nombre === valor)
//     if (res === undefined){
//         console.log('No se ha encontrado')
//     }
//     else{
//         console.log(res)
//     }
// }