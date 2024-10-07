// Strategy pattern should be used when you want to do a similar thing
// but with a different strategy. For example, maybe you have different
// sorting algorithms, and you want to use a strategy pattern to select
// which kind of sorting you'll do. Or like in the example below, you
// have to process payments but there are different methods to process
// a payment, but the flow for every method is generally the same. This
// is a good use case for a strategy pattern.

interface PaymentStrategy {
    collectPaymentDetails(): void;
    validatePaymentDetails(): boolean;
    pay(amount: number): void;
}

export class CreditCardStrategy implements PaymentStrategy {
    collectPaymentDetails() {
        console.log('Collecting credit card details...');
    }

    validatePaymentDetails() {
        console.log('Validating credit card details...');

        return true;
    }

    pay(amount: number) {
        console.log(`Paying $${amount} with credit card...`);
    }
}

export class PayPalStrategy implements PaymentStrategy {
    collectPaymentDetails() {
        console.log('Collecting PayPal details...');
    }

    validatePaymentDetails() {
        console.log('Validating PayPal details...');

        return true;
    }

    pay(amount: number) {
        console.log(`Paying $${amount} with PayPal...`);
    }
}

export class Context {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    processPayment(amount: number): void {
        this.strategy.collectPaymentDetails();
        if (this.strategy.validatePaymentDetails()) {
            this.strategy.pay(amount);
        }
    }
}
