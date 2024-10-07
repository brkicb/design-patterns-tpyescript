// Use when you need a method that returns one of several possible classes
// that share a common super class, and when you need this done at runtime.

// Note: All classes in the factory should share the same super class

export abstract class Creator {
    abstract factoryMethod(): void;
}

class ConcreteCreatorA extends Creator {
    factoryMethod() {
        console.log('ConcreteCreatorA');
    }
}

class ConcreteCreatorB extends Creator {
    factoryMethod() {
        console.log('ConcreteCreatorB');
    }
}

export class ConcreteFactory {
    create(concreteType: string): Creator | null {
        if (concreteType === 'A') {
            return new ConcreteCreatorA();
        } else if (concreteType === 'B') {
            return new ConcreteCreatorB();
        }
        return null;
    }
}
