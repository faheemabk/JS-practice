class car {
    constructor(doors, wheels, engine) {
        this.doors = doors;
        this.wheels = wheels;
        this.engine = engine;
    }
    runs() {
        console.log(this.engine + 'vroom vroom');
    }

    static runTheCar(){
        console.log('running');
    }
}

let swift = new car(5, 4, '1200cc');

swift.runs();

console.log(swift);

/* car.runs(); */

car.runTheCar();