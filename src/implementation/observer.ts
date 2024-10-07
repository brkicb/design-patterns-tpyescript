import {
    ConcreteSubject,
    ConcreteObserverA,
    ConcreteObserverB,
} from '../patterns/observer';

export function observerPattern() {
    console.log('------- OBSERVER PATTERN -------\n');

    const concreteSubject = new ConcreteSubject();
    const concreteObserverA = new ConcreteObserverA();
    const concreteObserverB = new ConcreteObserverB();

    concreteSubject.getState();
    concreteSubject.register(concreteObserverA);
    concreteSubject.setState(1);
    concreteSubject.register(concreteObserverB);
    concreteSubject.setState(2);

    console.log('\n----------------------------\n');
}
