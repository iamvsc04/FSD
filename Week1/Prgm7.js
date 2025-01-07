const car = {
  name: "BMW",
  model: "Q4",
  year: 2024,
  getDetails() {
    return `${this.name} has launched ${this.model} in ${this.year}`;
  },
};

let evCar = Object.create(car);
evCar.batteryCapacity = "150 KWh";
evCar.range = "300 kms";
evCar.getBatteryInfo = function () {
  return `this is an ev Car with a battery capacity of ${this.batteryCapacity} which allows us to drive for ${this.range}`;
};

console.log(car.getDetails());
console.log(evCar.getBatteryInfo());
