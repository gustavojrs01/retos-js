function hotelSystem(rooms) {
  const reserv = [];
  return {
    searchReservation: id => {
      const res = reserv.find(reserve => reserve.id === id);
      if (res) return res;
      else throw new Error("La reservación no fue encontrada");
    },
    getSortReservations: () => {
      return [...reserv].sort((reserve1, reserve2) => {
        if (reserve1.checkIn > reserve2.checkIn) return 1;
        if (reserve1.checkIn < reserve2.checkIn) return -1;
        if (reserve1.checkIn === reserve2.checkIn) return 0;
      });
    },
    addReservation: reservation => {
      if (reservation.checkIn > reservation.checkOut) {
        throw new Error("La fecha de llegada no puede ser después de la salida");
      }
      const isRoomReserved = reserv.filter(reserve =>
            reserve.checkIn <= reservation.checkOut &&
            reserve.checkOut >= reservation.checkIn
          ).some(reserve =>
            reserve.roomNumber === reservation.roomNumber
          );
      if (isRoomReserved) throw new Error("La habitación no está disponible");
      reserv.push(reservation);
      return "Reservación registrada exitosamente";
    },
    removeReservation: id => {
      const index = reserv.findIndex(reserve => reserve.id === id);
      if (index === -1) throw new Error("La reservación que se busca remover no existe");
      return reserv.splice(index,1)[0];
    },
    getReservations: () => reserv,
    getAvailableRooms: (checkIn, checkOut) => {
      const availableRooms = [];
      let index = 0;
      for (let i = 0; i < rooms; i++) {
        availableRooms[i] = i + 1;
      }
      reserv.filter(reserve =>
        reserve.checkIn <= checkOut &&
        reserve.checkOut >= checkIn
      ).forEach(reserve => {
        index = availableRooms.findIndex(num => reserve.roomNumber === num);
        if (index != -1) availableRooms.splice(index, 1);
      });
      return availableRooms;
    }
  }
}