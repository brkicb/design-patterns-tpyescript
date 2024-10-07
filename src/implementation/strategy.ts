import {
    CreditCardStrategy,
    PayPalStrategy,
    Context,
} from '../patterns/strategy';

export function strategyPattern() {
    console.log('------- STRATEGY PATTERN -------\n');

    const creditCardStrategy = new CreditCardStrategy();
    const payPalStrategy = new PayPalStrategy();

    const context = new Context(creditCardStrategy);
    context.processPayment(19.97);
    context.setPaymentStrategy(payPalStrategy);
    context.processPayment(24.97);

    console.log('\n----------------------------\n');
}
