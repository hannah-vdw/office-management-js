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
    it("makes room unavailable", () => {
      room1.bookRoom()
      expect(room1.isRoomAvailable()).toBe(false)
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