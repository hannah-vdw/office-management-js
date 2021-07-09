class Office {

  constructor() {
    this.meetingRooms = []
  }

  isMeetingRooms() {
    return this.meetingRooms
  }

  addRoom(room) {
    this.meetingRooms.push(room)
  }

  isAvailableRooms() {
    return this.meetingRooms.filter(item => item.isRoomAvailable())
  }


}