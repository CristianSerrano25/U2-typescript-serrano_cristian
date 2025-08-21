class Car {
    private make : string;

    constructor(make : string){
        this.make = make
    }

    drive(){
        console.log(`Driving a ${this.make}`)
    }

    getMake(){
    console.log(this.make) 
    }
}

let auto = new Car("Fiat")

auto.getMake()


