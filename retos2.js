function hotelSystem(rooms) {
  // Tu código aquí
  let reservations = [
    // {
    //   id: 1,
    //   name: "John Doe",
    //   checkIn: "10/01",
    //   checkOut: "12/01",
    //   roomNumber: 1,
    // },
    // {
    //   id: 2,
    //   name: "Jane Doe",
    //   checkIn: "01/01",
    //   checkOut: "02/01",
    //   roomNumber: 2,
    // },
  ];
  const formatearFecha = (date)=> new Date(date.split('/').reverse().join('/'))
  return {
    searchReservation: (id) => {
      const reservation = reservations.find(reservation => reservation.id === id);
      if (!reservation) {
        throw new Error("La reservación no fue encontrada");
      }
      return reservation;
    },
    getSortReservations: () => {
      return [...reservations].sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));    
    },
    // addReservation: (reservation) => {
    //   const { checkIn, checkOut, roomNumber } = reservation;
     
    //   const isRoomAvailable = reservations.every(reservation => {
    //     const { checkIn: checkInRes, checkOut: checkOutRes } = reservation;
    //     console.log(formatearFecha(checkIn), formatearFecha(checkInRes))
    //     return formatearFecha(checkIn) < formatearFecha(checkInRes) && formatearFecha(checkOut) < formatearFecha(checkInRes) || formatearFecha(checkIn) > formatearFecha(checkOutRes) && formatearFecha(checkOut) > formatearFecha(checkOutRes);
    //   });
    //   console.log(isRoomAvailable)
      
    //   if (!isRoomAvailable) {
    //     throw new Error("La habitación no está disponible");
    //   }
    //   reservations.push(reservation);
    //   return "Reservación agregada exitosamente";
    // },
    addReservation: reservation => {
      let {checkIn, checkOut} = reservation
      checkIn = formatearFecha(checkIn)
      checkOut = formatearFecha(checkOut)
      if (checkIn.getTime() === checkOut.getTime()){        
        throw new Error('La fecha del checkOut no puede ser igual al CheckIn')
      }
      if (checkIn > checkOut){        
        throw new Error('La fecha del checkIn no puede ser superior al CheckOut')
      }
      const isRoomAvailable = [...reservations].every(res=>{
        const resCheckIn = formatearFecha(res.checkIn)
        const resCheckOut = formatearFecha(res.checkOut)         
        if (checkIn < resCheckIn && checkOut <= resCheckOut){
          return true
        }
        if (checkIn >= resCheckOut ){
          return true
        }
        return false
      })
      if (isRoomAvailable){
        reservations.push(reservation)
        return 'Reserva agregada correctamente'
      }
      else {
        throw new Error('La habitación no está disponible')
      }
    },
    removeReservation: (id) => {
      const reservation = reservations.find(reservation => reservation.id === id);
      if (!reservation) {
        throw new Error("La reservación que se busca remover no existe");
      }
      reservations = reservations.filter(reservation => reservation.id !== id);
      return reservation;
    },
    getReservations: () => reservations,

    // getAvailableRooms: (checkInP, checkOutP) => {
  

    //   let availableRooms = [];
      
    //   [...Array(rooms)].forEach((_, index) => {
    //     const isRoomAvailable = reservations.every((reservation) => {
    //       if (reservation.roomNumber === index + 1) {
    //         const { checkIn, checkOut } = reservation;
    //         return formatearFecha(checkInP) >= formatearFecha(checkOut) || formatearFecha(checkOutP) <= formatearFecha(checkIn);
    //       }
    //       return true;
    //     });
    //     if (isRoomAvailable) {
    //       availableRooms.push(index + 1);
    //     }

    //   });
    //   return availableRooms;
    // },
    getAvailableRooms: (checkIn, checkOut)=>{
      
      let availableRooms = []
      checkIn = formatearFecha(checkIn)
      checkOut = formatearFecha(checkOut)
      for(let i = 1;i<=rooms;i++){
        const disponible = [...reservations].filter(res=>{
          const resCheckIn = formatearFecha(res.checkIn)
          const resCheckOut = formatearFecha(res.checkOut)
          if (res.roomNumber === i){
            console.log('aqui la room es igual')
            if (checkIn < resCheckIn && checkOut <= resCheckOut){
              return true
            }
            if (checkIn >= resCheckOut ){
              return true
            }
            return false
          }
        })
        if (disponible){
          availableRooms.push(i)
        }            
      }
      // const isRoomAvailable = [...reservations].filter(res=>{
        // const resCheckIn = formatearFecha(res.checkIn)
        // const resCheckOut = formatearFecha(res.checkOut)
        // if (checkIn < resCheckIn && checkOut <= resCheckOut){
        //   return true
        // }
        // if (checkIn >= resCheckOut ){
        //   return true
        // }
        // return false
      // })
      
      return availableRooms
    }
  }
  
}

const hotel = new hotelSystem(10)