// Class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} is stopping.`);
  }

  honk() {
    console.log(`${this.make} ${this.model} is honking.`);
  }

  getInfo() {
    console.log(`Vehicle: ${this.make} ${this.model}, Year: ${this.year}`);
  }

  accelerate() {
    console.log(`${this.make} ${this.model} is accelerating.`);
  }

  brake() {
    console.log(`${this.make} ${this.model} is braking.`);
  }
}

// Object
const vehicle = new Vehicle("Toyota", "Camry", 2022);

vehicle.start();
vehicle.accelerate();
vehicle.honk();
vehicle.brake();
vehicle.stop();
vehicle.getInfo();

// Inheritance
class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }

  openDoors() {
    console.log(`Opening ${this.numberOfDoors} doors.`);
  }
}

const car = new Car("Honda", "Accord", 1998, 4);
car.start();
car.openDoors();

class Spaceship extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year);
    this.fuelType = fuelType;
  }

  launch() {
    console.log(
      `${this.make} ${this.model} in year ${this.year} spaceship is launching with ${this.fuelType} fuel.`
    );
  }
}

const spaceship = new Spaceship("SpaceX", "Starship", 2022, "liquid methane");

spaceship.start();
spaceship.launch();

// Polymorphism
class Motorcycle extends Vehicle {
  start() {
    console.log("Motorcycle is revving up.");
  }
}

const motorcycle = new Motorcycle("Harley", "Davidson", 2023);
vehicle.start(); // Outputs: Vehicle is starting.
motorcycle.start(); // Outputs: Motorcycle is revving up.

// Encapsulation
class EncapsulatedVehicle {
  #make; // private field
  #model; // private field
  #year; // private field

  constructor(make, model, year) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
  }

  // Getter and setter methods for encapsulation
  // Getter for make
  get make() {
    return this.#make;
  }

  // Setter for make
  set make(newMake) {
    this.#make = newMake;
  }

  // Getter for model
  get model() {
    return this.#model;
  }

  // Setter for model
  set model(newModel) {
    this.#model = newModel;
  }

  // Getter for year
  get year() {
    return this.#year;
  }

  // Setter for year
  set year(newYear) {
    if (newYear > 1885) {
      // The first car was invented around 1885
      this.#year = newYear;
    } else {
      console.log("Invalid year. Vehicles weren't around before 1885.");
    }
  }

  // Basic methods
  start() {
    console.log(`${this.#make} ${this.#model} is starting.`);
  }

  stop() {
    console.log(`${this.#make} ${this.#model} is stopping.`);
  }

  honk() {
    console.log(`${this.#make} ${this.#model} is honking.`);
  }

  getInfo() {
    console.log(`Vehicle: ${this.#make} ${this.#model}, Year: ${this.#year}`);
  }

  accelerate() {
    console.log(`${this.#make} ${this.#model} is accelerating.`);
  }

  brake() {
    console.log(`${this.#make} ${this.#model} is braking.`);
  }
}

const encapsulatedVehicle = new EncapsulatedVehicle("Toyota", "Camry", 2022);

console.log(encapsulatedVehicle.make); // Outputs: Toyota
encapsulatedVehicle.make = "Honda";

console.log(encapsulatedVehicle.make); // Outputs: Honda
console.log(encapsulatedVehicle.model); // Outputs: Camry

encapsulatedVehicle.model = "Accord";
console.log(encapsulatedVehicle.model); // Outputs: Accord
console.log(encapsulatedVehicle.year); // Outputs: 2022

encapsulatedVehicle.year = 2025;
console.log(encapsulatedVehicle.year); // Outputs: 2025
encapsulatedVehicle.year = 1800; // Outputs: Invalid year. Vehicles weren't around before 1885.

encapsulatedVehicle.start(); // Outputs: Honda Accord is starting.
encapsulatedVehicle.getInfo(); // Outputs: Vehicle: Honda Accord, Year: 2025

// Abstraction
class AbstractVehicle {
  constructor(make, model) {
    if (new.target === AbstractVehicle) {
      throw new Error("Cannot instantiate an abstract class.");
    }

    this.make = make;
    this.model = model;
  }

  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}

class AbstractCar extends AbstractVehicle {
  start() {
    console.log(`${this.make} ${this.model} car is starting.`);
  }
}

const abstractCar = new AbstractCar("Toyota", "Corolla");

abstractCar.start();

// Aggregation
class Engine {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`${this.type} engine starting...`);
  }
}

class AggregationVehicle {
  constructor(make, model, year, engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    // Aggregation: Vehicle uses an external Engine object
    this.engine = engine;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
    this.engine.start(); // Starts the external engine
  }
}

const v8Engine = new Engine("V8");
const aggregationVehicle = new AggregationVehicle(
  "Ford",
  "Mustang",
  2022,
  v8Engine
);

aggregationVehicle.start();

// Composition
class Transmission {
  shift() {
    console.log("Transmission shifting...");
  }
}

class CompositionVehicle {
  constructor(make, model, year, engineType, transmissionType) {
    this.make = make;
    this.model = model;
    this.year = year;
    // Composition: Vehicle has an Engine and Transmission
    this.engine = new Engine(engineType);
    this.transmission = new Transmission(transmissionType);
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
    this.engine.start(); // Starting the engine
  }

  shift() {
    console.log(`${this.make} ${this.model} is shifting gears...`);
    this.transmission.shift(); // Shifting the transmission
  }
}

const compositionVehicle = new CompositionVehicle(
  "Toyota",
  "Camry",
  2022,
  "V6",
  "Automatic"
);
compositionVehicle.start();
compositionVehicle.shift();

// Association
class Driver {
  constructor(name) {
    this.name = name;
  }

  drive(vehicle) {
    console.log(
      `${this.name} is driving the ${vehicle.make} ${vehicle.model}.`
    );
  }
}

const driver = new Driver("Alice");
const car2 = new Vehicle("BMW", "X5", 2023);
driver.drive(car2); // Outputs: Alice is driving the BMW X5.

// Coupling
class CouplingVehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // Tight Coupling: The Vehicle directly creates an Engine object
    this.engine = new Engine("V8"); // Vehicle is tightly coupled to the Engine class
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
    this.engine.start(); // Starts the engine created inside the vehicle
  }
}

const couplingVehicle = new CouplingVehicle("Ford", "Mustang", 2022);
couplingVehicle.start(); // Outputs: Ford Mustang is starting... V8 engine starting...
