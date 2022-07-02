import { Hello } from '../src';

test('hello', () => {
  expect(new Hello().sayHello()).toBe('Hello, World!');
});