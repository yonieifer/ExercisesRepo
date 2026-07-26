import {describe, it} from "node:test"
import assert from "node:assert/strict"
import { isEven, max, average,toTitleCase, filterEven } from "./math.js"


describe("isEven", () => {
    it("return true to even num", () => {
        assert.ok(isEven(2))
    })
    it("return false to odd num", () => {
        assert.strictEqual(isEven(3), false)
    })
    it("return false to letter", () => {
        assert.strictEqual(isEven("k"), false)
    })
})

describe("max", () => {
    it("return 5 in 5, 2", () => {
        assert.strictEqual(max(5, 2), 5)
    })
    it("return -4 in -4, -8", () => {
        assert.strictEqual(max(-4, -8), -4)
    })
    it("return 5 in 5, 5", () => {
        assert.strictEqual(max(5, 5), 5)
    })
})

describe("average", () => {
    it("return 3 to [1, 3, 5]", () => {
        assert.strictEqual(average([1, 3, 5]), 3)
    })
    it("return 7 to [7]", () => {
        assert.strictEqual(average([7]), 7)
    })
    it("return 0 to []", () => {
        assert.strictEqual(average([]), 0)
    })
})

describe("toTitleCase", () => {
    it("return 'Hello World' to simple 'hello world'", () => {
        assert.strictEqual(toTitleCase("hello world"), "Hello World")
    })
    it("return '' to ''", () => {
        assert.strictEqual(toTitleCase(""), "")
    })
    it("return 'Hello' to 'hello'", () => {
        assert.strictEqual(toTitleCase("hello"), "Hello")
    })
})

describe("filterEven", () => {
    it("return [2, 4, 6] to [1, 2, 3, 4, 5, 6]", () => {
        assert.deepStrictEqual(filterEven([1, 2, 3, 4, 5, 6]), [2, 4, 6])
    })
    it("return [] for odds array", () => {
        assert.deepStrictEqual(filterEven([1, 13, 23]), [])
    })
    it("return [] to an empty array", () => {
        assert.deepStrictEqual(filterEven([]), [])
    })
})

