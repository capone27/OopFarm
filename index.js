// index.js
class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }
  addCrop(crop) {
    this.crops.push(crop)
  }

  calculateIncome() {
   
    const cropIncome = this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0)
    const animalIncome = this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((a, b) => a + b, 0)
    return cropIncome + animalIncome
  }

  addAnimal(animal) {
    this.animals.push(animal)
  }
}
module.exports.Farm = Farm