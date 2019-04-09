// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
class VendingMachine {
  constructor() {
    this._balance = 0;
    this.change = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.coke = { name: "coke", price: 100, count: 10 };
    this.tea = { name: "tea", price: 80, count: 10 };
    this.water = { name: "water", price: 50, count: 10 };
    this.energyDrink = { name: "energyDrink", price: 120, count: 10 };
    this.croissant = { name: "croissant", price: 120, count: 10 };
    this.pie = { name: "pie", price: 50, count: 10 };
    this.tart = { name: "tart", price: 50, count: 10 };
    this.cake = { name: "cake", price: 120, count: 10 };
    this.chips = { name: "chips", price: 100, count: 10 };
    this.stix = { name: "stix", price: 80, count: 10 };
    this.seeds = { name: "seeds", price: 10, count: 20 };
    this.saltie = { name: "saltie", price: 20, count: 10 };
    this.milka = { name: "milka", price: 40, count: 10 };
    this.kiKat = { name: "kitKat", price: 30, count: 10 };
    this.energyBar = { name: "energyBar", price: 130, count: 10 };
    this.profiterol = { name: "profiterol", price: 150, count: 10 };

    this.inventory = [
      [this.coke, this.tea, this.water, this.energyDrink],
      [this.croissant, this.pie, this.tart, this.cake],
      [this.chips, this.stix, this.seeds, this.saltie],
      [this.milka, this.kitKat, this.energyBar, this.profiterol],
    ];
    this.selectedRow = 0;
    this.selectedProduct = 0;
  }
  get balance() {
    for (const key in this.till) {
      this._balance += Number(key) * this.till[key];
      this.change += this._balance;
    }
    return this._balance;
  }
  insertCoin(coin) {
    this.till[coin]++;
  }
  selectRow(r) {
    this.selectRow = this.inventory[r];
    return this.selectRow;
  }
  selectColumn(c) {
    this.selectedProduct = this.selectRow[c];
    return this.selectedProduct;
  }
  changeReturn() {
    console.log(this.selectedProduct.price);
    this._balance = 0;
    this.change - 100;

    return this.change;
  }
}
module.exports = { VendingMachine };
