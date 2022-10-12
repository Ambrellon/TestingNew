const {factoral} = require("./Maths.js");
const {expect} = require("chai");
const { describe, it } = require("node:test");

describe("maths tests", () => {
    it("should equal 2", () => {
        expect(factorial(120)).to.equal(5);
    })
})