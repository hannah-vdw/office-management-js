'use strict'

describe("MeetingRoom", () => {

  let room1

  beforeEach(() => {
    room1 = new MeetingRoom('Malala')
  })

  it("MeetingRoom is created with a name", () => {
    expect(room1.isRoomName()).toBe('Malala')
  })

  it("MeetingRoom is available when created", () => {
    expect(room1.isRoomAvailable()).toBe(true)
  })

  describe("bookRoom", () => {
    beforeEach(() => {
      room1.bookRoom()
    })

    it("makes room unavailable", () => {
      expect(room1.isRoomAvailable()).toBe(false)
    })

    it("throws an error if user tried to book same room twice", () => {
      expect(() => { room1.bookRoom() }).toThrowError('Room is already in use')
    })
  })

  describe("leaveRoom", () => {
    it("makes room available", () => {
      room1.bookRoom()
      room1.leaveRoom()
      expect(room1.isRoomAvailable()).toBe(true)
    })
  })

})