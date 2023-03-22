

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
        available: true
      }
      hotelRooms.push(room)
    }
  }
  crearRooms() 
  let reservaciones =[{
      id: 11,
      name: "John Doe",
      checkIn: "10/01",
      checkOut: "12/01",
      roomNumber: 1,
    },
    {
      id: 111,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    }
  ]

  const getRooms = ()=>{
    return hotelRooms
  }
  
  const searchReservation = (id)=>{
      const reservacion = reservaciones.find((x)=>x.id===id)
      if (reservacion) {
          return reservacion
      }
      else throw new Error("La reservación no fue encontrada")        
  }
  const getSortReservations = ()=>{
    const fechaFormateada = [...reservaciones].map((res)=>{
      const dateOriginal = res.checkIn.split('/')
      const mes = parseInt(dateOriginal[1])
      const dia = parseInt(dateOriginal[0])
      const anio = new Date()
      const fecha = new Date(`${mes}-${dia}-${anio.getFullYear()}`)
      res.fecha = fecha
      return res    
    })
    let resOrdenadas = [...fechaFormateada].sort((res1,res2)=>{
      if (res1.fecha > res2.fecha){
        return 1
      }
      if (res1.fecha < res2.fecha){
        return -1
      }
      return 0        
    })
    resOrdenadas.forEach((res)=>{
      delete res.fecha 
    })
    return ordenadas
  }
  return {
      searchReservation,
      getSortReservations,
      getRooms
  }   
}

const hotel = hotelSystem(10);

// console.log(hotel.getSortReservations())
// console.log(hotel.getSortReservations())
console.log(hotel.getRooms())