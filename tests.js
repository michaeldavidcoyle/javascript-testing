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
    it('should return a string', function() {
        expect(typeof stringCharAt()).toBe('string');
    });
});