// crops.js
class Crop {
  constructor(acres) {
    this.acres = acres
  }
  getYieldInEuros() {
    return this.price * this.getYieldInKg()
  }

  getCosts() {
    return this.cost * this.acres
  }
}

class Wheat extends Crop {
  constructor(acres) {
    super(acres)
    this.cost = 340
    this.price = 1.5
  }
  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3)
  }
}

class Sugarcane extends Crop {
  constructor(acres) {
    super(acres)
    this.cost = 166
    this.price = 2.0
  }
  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1)
  }

}
module.exports = { Wheat, Crop, Sugarcane }