function car(producer, model, year) {
    this.producer = producer;
    this.model = model;
    this.year = year;
    this.drive = function() {
        console.log(`${this.producer} ${this.model} ${this.year} is a good car.`);
    }
}

function Allroad(producer, model, year) {
    car.call(this, producer, model, year);
    this.move = function() {
        console.log(`This ${this.producer} ${this.model} ${this.year} can drive everywhere.`);
    }
}

function Sedan(producer, model, year) {
    car.call(this, producer, model, year);
    this.move = function() {
        console.log(`This ${this.producer} ${this.model} ${this.year} comfortable to drive in the highway.`);
    }
}

function StationWagon(producer, model, year) {
    car.call(this, producer, model, year);
    this.move = function() {
        console.log(`This ${this.producer} ${this.model} ${this.year} comfortable to transport the whole family.`);
    }
}


var FirstCar = new Allroad("Mercedes-Benz", "Gelendwagen", '2000');
FirstCar.drive();
FirstCar.move();

var SecondCar = new Sedan("Volkswagen", "Polo", '2015');
SecondCar.drive();
SecondCar.move();

var ThirdCar = new StationWagon("Volvo", "v90", '2017');
ThirdCar.drive();
ThirdCar.move();