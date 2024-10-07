import { ConcreteFactory } from '../patterns/factory';

export function factoryPattern() {
    console.log('------- FACTORY PATTERN -------\n');

    const concreteFactory = new ConcreteFactory();
    const concreteCreatorA = concreteFactory.create('A');
    const concreteCreatorB = concreteFactory.create('B');

    if (concreteCreatorA) concreteCreatorA.factoryMethod();
    if (concreteCreatorB) concreteCreatorB.factoryMethod();

    console.log('\n----------------------------\n');
}
