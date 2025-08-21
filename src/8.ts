class Car {
    make : string;

    constructor(make : string){
        this.make = make
    }

    drive(){
        console.log(`Driving a ${this.make}`)
    }
}

let auto = new Car("Mercedez")

auto.drive()