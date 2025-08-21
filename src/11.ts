interface shape {
    area() : number
}

class Circle {
    public radio : number

    constructor ( radio : number){
        this.radio = radio
    }

    area(): number {
        let resultado = (Math.PI * this.radio) ^ 2
        return resultado
    }
}

let circulito : shape = new Circle(10);