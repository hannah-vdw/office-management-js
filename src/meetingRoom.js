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
    this.roomAvailable = false
  }

  leaveRoom() {
    this.roomAvailable = true
  }

}