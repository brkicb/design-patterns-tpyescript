import { ConcreteCarBuilder, CarDirector } from '../patterns/builder';

export function builderPattern() {
    console.log('------- FACTORY PATTERN -------\n');

    const builder = new ConcreteCarBuilder();
    const director = new CarDirector(builder);
    const sportsCar = director.constructSportsCar();
    sportsCar.showDetails();
    const electricCar = director.constructElectricCar();
    electricCar.showDetails();

    const customCar = builder
        .setId('3')
        .setBrand('Ford')
        .setModel('Mustang')
        .setColor('Blue')
        .setDoors(2)
        .setWeight(1500)
        .setHeight(54)
        .build();
    customCar.showDetails();

    console.log('\n----------------------------\n');
}
