const { VendingMachine } = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
  it("should be able to select a row", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    const row = machine.selectRow(1);
    const product = row[0];
    const row2 = machine.selectRow(2);

    expect(row).to.be.an("array");
    expect(product.price).to.be.a("number");
    expect(product.name).to.be.a("string");
    expect(row2).to.equal(row);
    expect(machine.selectRow).to.be.a("function");
    try {
      machine.selectRow(5);
      machine.selectRow("A");
    } catch (err) {
      expect(err).to.eql("Please input a number from 0 to 4 ");
    }
  });
  it("should be able to select a column", () => {
    const machine = new VendingMachine();
    machine.selectRow(0);
    const column = machine.selectColumn(0);
    const column2 = machine.selectColumn(1);

    expect(column).to.be.an("object");
    expect(column.name).to.be.a("string");
    expect(column.price).to.be.a("number");
    expect(machine.selectColumn).to.be.a("function");
    expect(column2).to.equal(column);
    try {
      machine.selectColumn(5);
    } catch (err) {
      expect(err).to.eql("Please input a number from 0 to 4 ");
    }
  });
  it("should give change back", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);

    machine.selectRow(0);

    machine.selectColumn(0);

    let change = machine.changeReturn();
    expect(change).to.equal(400);
    expect(machine._balance).to.equal(0);
  });
});
