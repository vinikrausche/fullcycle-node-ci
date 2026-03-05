const test = require("node:test")
const assert = require("node:assert/strict")
const { sum } = require("./math")

test("sum deve somar dois numeros", () => {
    assert.equal(sum(1, 2), 3)
})
