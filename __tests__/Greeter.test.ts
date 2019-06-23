import { Greeter } from '../src/index';


describe('The Gree should do something', () => {
    test('My Greeter', () => {
        expect(Greeter('Carl')).toBe('Hello Carl');
    });
});