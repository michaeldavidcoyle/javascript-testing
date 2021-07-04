// Unit tests for helloWorld
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string', function() {
        expect(typeof helloWorld()).toBe('string');
    });
    it('should return "Hello, World!" when called', function() {
        expect(helloWorld()).toBe('Hello, World!');
    });
});

describe('stringCharAt', function() {
    it('should be a defined function', function() {
        expect(typeof stringCharAt).toBe('function');
    });
    it('should return a string when passed a string and a position', function() {
        expect(typeof stringCharAt('abc', 0)).toBe('string');
    });
    it ('should return undefined when passed an argument of an incorrect type', function() {
        expect(stringCharAt('abc', 'abc')).toBe(undefined);
        expect(stringCharAt('abc', 3.14)).toBe(undefined);
        expect(stringCharAt('abc', false)).toBe(undefined);
    });
});