import generateHash from "./generateHash"

test("generateHash() is a string", () => {
  expect(typeof generateHash()).toBe("string")
})

test("generateHash() length of 8", () => {
  expect(generateHash().length).toBe(8)
})

test("generateHash() starts with an h", () => {
  expect(generateHash()[0]).toBe("h")
})
