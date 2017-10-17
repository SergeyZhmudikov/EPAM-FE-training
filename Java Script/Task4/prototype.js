function car(producer, model, year) {
    this.producer = producer;
    this.model = model;
    this.year = year;
}

car.prototype.drive = function() {
    console.log(`${this.producer} ${this.model} ${this.year} is a good car.`);
}



function Allroad(producer, model, year) {
    car.prototype.constructor(producer, model, year);
    this.slowmove = function() {
        console.log(`This ${this.producer} ${this.model} ${this.year} can drive everywhere.`);
    }
}
Allroad.prototype = Object.create(car.prototype);



function Sedan(producer, model, year) {
    car.prototype.constructor(producer, model, year);
    this.fastmove = function() {
        console.log(`This ${this.producer} ${this.model} ${this.year} comfortable to drive in the highway.`);
    }
}
Sedan.prototype = Object.create(car.prototype);



function StationWagon(producer, model, year) {
    car.prototype.constructor(producer, model, year);
    this.averagemove = function() {
        console.log(`This ${this.producer} ${this.model} ${this.year} comfortable to transport the whole family.`);
    }
}
StationWagon.prototype = Object.create(car.prototype);


var FirstCar = new Allroad("Mercedes-Benz", "Gelendwagen", '2000');
FirstCar.drive();
FirstCar.slowmove();

var SecondCar = new Sedan("Volkswagen", "Polo", '2015');
SecondCar.drive();
SecondCar.fastmove();

var ThirdCar = new StationWagon("Volvo", "v90", '2017');
ThirdCar.drive();
ThirdCar.averagemove();