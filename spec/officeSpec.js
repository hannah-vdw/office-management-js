'use strict'

describe("Office", () => {

  let office
  let room1
  let room2
  let room3

  beforeEach(() => {
    office = new Office()
    room1 = new MeetingRoom("Mary Berry")
    room2 = new MeetingRoom("Del Boy")
    room3 = new MeetingRoom("Jools Holland")
    office.addRoom(room1)
  })

  it("adds a meeting room to the array", () => {
    expect(office.isMeetingRooms()).toContain(room1)
  })

  describe("isAvailableRooms", () => {
    beforeEach(() => {
      spyOn(room2, 'isRoomAvailable').and.returnValue(false)
      spyOn(room3, 'isRoomAvailable').and.returnValue(true)
      office.addRoom(room2)
      office.addRoom(room3)
    })

    it("does not list unavailable room", () => {
      expect(office.listAvailableRooms()).not.toContain(room2)
    })

    it("lists available rooms", () => {
      expect(office.listAvailableRooms()).not.toContain(room2)
      expect(office.listAvailableRooms()).toContain(room1, room3)
    })

  })


})