function hotelSystem(rooms) {
    const hotelRooms=[]
    const crearRooms = ()=>{
      for (let i = 1;i <= rooms;i++){
        const room = {
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
    let reservaciones =[]
    const getRooms = ()=> hotelRooms
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
      if (reservacionesActuales.find(res => res.id === id)){
        throw new Error('El id ya existe')
      }
      if (formatearFecha(checkIn)>formatearFecha(checkOut)){
        throw new Error('El checkOut ingresado es menor a la fecha de checkIn')
      }
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
          hotelRooms[roomNumber-1].reservs.push({
            id,
            checkIn:formatearFecha(checkIn),
            checkOut:formatearFecha(checkOut),
            name
          })
          reservaciones.push(reservation)
        })
      }
      return "Reservacion agregada" 
    }
    const getReservations = ()=> reservaciones  
    const removeReservation = (id)=>{
      const reserva = reservaciones.some(res=>res.id === id)    
      if (!reserva){
        throw new Error('El ID ingresado no existe')
      }
      const reservacion = [...reservaciones].filter(res=>res.id===id)[0]
      reservaciones = reservaciones.filter((res)=>res.id !==id)
      return reservacion
    }
  
    const getAvailableRooms = (checkIn, checkOut)=>{    
      const sinReservas = [...hotelRooms].filter((hab)=>hab.reservs.length===0).map((e)=>e.roomNumber)
      const conReservas =  [...hotelRooms].filter(room=>room.reservs.some(res => {
        if ( formatearFecha(checkIn) < res.checkIn && formatearFecha(checkOut)<=res.checkIn){
          return true
        }
        if (formatearFecha(checkIn)>=res.checkOut){
          return true
        }
        return false
      })).map(e => e.roomNumber)
      return [...sinReservas]
      // return [...conReservas,...sinReservas]
    }
    return {
        searchReservation,
        getSortReservations,
        getRooms,
        addReservation,
        getRoom,
        getReservations,
        removeReservation,
        getAvailableRooms
    }   
  }