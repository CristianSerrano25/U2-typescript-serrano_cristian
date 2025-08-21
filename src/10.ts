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



class ElectricCar extends Car {
    batteryLife : number;

    constructor ( make : string , batteryLife : number){
        super(make)
        this.batteryLife = batteryLife
    }

    charge(){
        console.log("El coche esta cargando")
    }
}

let autoElectrico = new ElectricCar("Renault", 50)

autoElectrico.charge()

