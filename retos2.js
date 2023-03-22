

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
    let reservaciones =[{
        id: 1,
        name: "John Doe",
        checkIn: "10/01",
        checkOut: "12/01",
        roomNumber: 1,
      },
      {
        id: 2,
        name: "John Doe",
        checkIn: "01/01",
        checkOut: "02/01",
        roomNumber: 1,
      }
    ]
    
    const searchReservation = (id)=>{
        const reservacion = reservaciones.find((x)=>x.id===id)
        if (reservacion) {
            return reservacion
        }
        else throw new Error("La reservación no fue encontrada")        
    }
    const getSortReservations = ()=>{
        return [...reservaciones].sort((res1,res2)=>{
            (res1.checkIn<res2.checkIn)
            ? 1
            : (res1.checkIn>res2.checkIn)
                ? -1
                : 0
        })
    }

    return {
        searchReservation,
        getSortReservations
    }
   
}

const hotel = hotelSystem(10);

console.log(hotel.getSortReservations())