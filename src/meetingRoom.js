class MeetingRoom {

  constructor(roomName) {
    this.roomName = roomName
    this.roomAvailable = true
  }

  isRoomName() {
    return this.roomName
  }

  isRoomAvailable() {
    return this.roomAvailable
  }

  bookRoom() {
    if (this.isRoomAvailable()) {
      this.roomAvailable = false
    } else {
      throw new Error('Room is already in use')
    }
  }

  leaveRoom() {
    this.roomAvailable = true
  }

}