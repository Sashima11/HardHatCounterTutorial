const {expect} = require("chai");
const {ether} = require("hardhat");

describe("Counter", function () {
    let counter;
    this.beforeEach(async function (){
        const Counter = await ethers.getCounterFactory("Counter");
        counter = await Counter.deploy();
        //await counter.deployed();
    });
    it("should return the initail count of 0", async function () {
        const count = await counter.getCount();
        expect(count).to.equal(0, "Intial count should be 0");
    });
    it("should increment the count", async function(){
        await counter.increment();
        const count = await counter.getCount();
        expect(count).to.equal(1, "Count should be 1 after incrementingh");
    });
    it("should decrement the count", async function(){
        await counter.decrement();
        const count = await counter.getCount();
        expect(count).to.equal(-1, "Count should be -1 after incrementingh");
    });
});