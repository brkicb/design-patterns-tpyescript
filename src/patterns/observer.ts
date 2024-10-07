// Many objects need to receive an update when another objects changes

interface Observer {
    update(data: any): void;
}

interface Subject {
    register(observer: Observer): void;
    unregister(observer: Observer): void;
    notifyObservers(): void;
}

export class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: number = 0;

    register(observer: Observer): void {
        console.log('Registering new observer...');
        this.observers.push(observer);
    }

    unregister(observer: Observer): void {
        console.log('Unregistering observer...');
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex > -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.state);
        }
    }

    getState(): number {
        console.log(`Subject: Current state is ${this.state}`);
        return this.state;
    }

    setState(state: number): void {
        console.log(`Subject: Changing state to ${state}`);
        this.state = state;
        this.notifyObservers();
    }
}

export class ConcreteObserverA implements Observer {
    update(data: number): void {
        console.log(`Observer A: Received update with data: ${data}`);
    }
}

export class ConcreteObserverB implements Observer {
    update(data: number): void {
        console.log(`Observer B: Received update with data: ${data}`);
    }
}
