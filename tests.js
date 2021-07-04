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
        expect(stringCharAt(true, 1)).toBe(undefined);
        expect(stringCharAt(99, 42)).toBe(undefined);
        expect(stringCharAt(['abc', 2])).toBe(undefined);
    });
    it('should return the appropriate character when passsed a string and a position', function() {
        var str = 'testing: 1, 2, 3';
        expect(stringCharAt(str, 0)).toBe(str.charAt(0));
        expect(stringCharAt(str, 1)).toBe(str.charAt(1));
        expect(stringCharAt(str, 4)).toBe(str.charAt(4));
        expect(stringCharAt(str, 7)).toBe(str.charAt(7));
        expect(stringCharAt(str, 10)).toBe(str.charAt(10));
        expect(stringCharAt(str, 12)).toBe(str.charAt(12));
    });
    it('should return an empty string when passed a position < 0 or > string.length', function() {
        var str = '0123456789';
        expect(stringCharAt(str, -1)).toBe(str.charAt(-1));
        expect(stringCharAt(str, 10)).toBe(str.charAt(10));
        expect(stringCharAt(str, 100)).toBe(str.charAt(100));
    });
});