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

})