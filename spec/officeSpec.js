'use strict'

describe("Office", () => {

  let office
  let room1
  let room2

  beforeEach(() => {
    office = new Office()
    room1 = new MeetingRoom("Mary Berry")
    room2 = new MeetingRoom("Del Boy")
    office.addRoom(room1)
  })

  it("adds a meeting room to the array", () => {
    expect(office.isMeetingRooms()).toContain(room1)
  })

  describe("isAvailableRooms", () => {
    beforeEach(() => {
      spyOn(room2, 'isRoomAvailable').and.returnValue(false)
    })

    it("does not list unavailable room", () => {
      office.addRoom(room2)
      expect(office.isAvailableRooms()).not.toContain(room2)
    })
  })


})