// This pattern is used to construct different types and
// representations of an object using the same construction
// process.

class Car {
    public id: string | null;
    public brand: string | null;
    public model: string | null;
    public color: string | null;
    public doors: number | null;
    public weight: number | null;
    public height: number | null;

    constructor(
        id: string | null,
        brand: string | null,
        model: string | null,
        color: string | null,
        doors: number | null,
        weight: number | null,
        height: number | null
    ) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.doors = doors;
        this.weight = weight;
        this.height = height;
    }

    public showDetails(): void {
        console.log(`Car Details:
        ID: ${this.id}
        Brand: ${this.brand}
        Model: ${this.model}
        Color: ${this.color}
        Doors: ${this.doors}
        Weight: ${this.weight}
        Height: ${this.height}
        `);
    }
}

interface CarBuilder {
    setId(id: string): CarBuilder;
    setBrand(brand: string): CarBuilder;
    setModel(model: string): CarBuilder;
    setColor(color: string): CarBuilder;
    setDoors(doors: number): CarBuilder;
    setWeight(weight: number): CarBuilder;
    setHeight(height: number): CarBuilder;
    build(): Car;
}

export class ConcreteCarBuilder implements CarBuilder {
    public id: string | null;
    public brand: string | null;
    public model: string | null;
    public color: string | null;
    public doors: number | null;
    public weight: number | null;
    public height: number | null;

    constructor() {
        this.id = null;
        this.brand = null;
        this.model = null;
        this.color = null;
        this.doors = null;
        this.weight = null;
        this.height = null;
    }

    public setId(id: string): CarBuilder {
        this.id = id;
        return this;
    }

    public setBrand(brand: string): CarBuilder {
        this.brand = brand;
        return this;
    }

    public setModel(model: string): CarBuilder {
        this.model = model;
        return this;
    }

    public setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    public setDoors(doors: number): CarBuilder {
        this.doors = doors;
        return this;
    }

    public setWeight(weight: number): CarBuilder {
        this.weight = weight;
        return this;
    }

    public setHeight(height: number): CarBuilder {
        this.height = height;
        return this;
    }

    public build(): Car {
        return new Car(
            this.id,
            this.brand,
            this.model,
            this.color,
            this.doors,
            this.weight,
            this.height
        );
    }
}

export class CarDirector {
    private builder: CarBuilder;

    constructor(builder: CarBuilder) {
        this.builder = builder;
    }

    public constructSportsCar(): Car {
        return this.builder
            .setId('1')
            .setBrand('Porsche')
            .setModel('911 Turbo')
            .setColor('Red')
            .setDoors(2)
            .setWeight(1450)
            .setHeight(52)
            .build();
    }

    public constructElectricCar(): Car {
        return this.builder
            .setId('2')
            .setBrand('Tesla')
            .setModel('Model S')
            .setColor('White')
            .setDoors(4)
            .setWeight(2070)
            .setHeight(56)
            .build();
    }
}
