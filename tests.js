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

describe('stringIndexOf', function() {
    var string = 'abcdefghijklmnopqrstuvwxyz';
    var randomChar = string[Math.floor(Math.random() * string.length)];
    var randomPosition = Math.floor(Math.random() * 23);
    var start = Math.floor(Math.random() * 10);
    var end = start + Math.floor(Math.random() * 10 + 2);
    var searchString = string.slice(start, end);

    it('should be a defined function', function() {
        expect(typeof stringIndexOf).toBe('function');
    });
    it('should always return an integer when called', function() {
        expect(Number.isInteger(stringIndexOf())).toBe(true);
        expect(Number.isInteger(stringIndexOf(null))).toBe(true);
        expect(Number.isInteger(stringIndexOf('e'))).toBe(true);
        expect(Number.isInteger(stringIndexOf(2))).toBe(true);
        expect(Number.isInteger(stringIndexOf(false))).toBe(true);
        expect(Number.isInteger(stringIndexOf(NaN))).toBe(true);
    });
    it('should return the index of a passed single character', function() {
        expect(stringIndexOf(string, randomChar)).toBe(string.indexOf(randomChar));
    });
    it('should return -1 when the searchString is not found', function() {
        expect(stringIndexOf(string, '7')).toBe(-1);
    });
    it('should take an argument allowing the search to begin at any position', function() {
        expect(stringIndexOf(string, 'a', randomPosition)).toBe(string.indexOf('a', randomPosition));
    });
    it('should find the starting index of searchString of variable length', function() {
        expect(stringIndexOf(string, searchString)).toBe(string.indexOf(searchString));
    });
    it('should return the passed position (or 0) when passed an empty string or string.length when the position is greater', function() {
        expect(stringIndexOf(string, '')).toBe(string.indexOf(''));
        expect(stringIndexOf(string, '', randomPosition)).toBe(string.indexOf('', randomPosition));
        expect(stringIndexOf(string, '', 100)).toBe(string.indexOf('', 100));
    });
});

describe('stringLength', function() {
    var strings = [
        '',
        ' ',
        'abc',
        'qwerty',
        'Hello, World!',
        'I sure love being a string!',
        'The quick brown fox jumps over a lazy dog.'
    ];
    var randomString = strings[Math.floor(Math.random() * strings.length)];

    it('should be a defined function', function() {
        expect(typeof stringLength).toBe('function');
    });
    it('should always return an integer', function() {
        expect(Number.isInteger(stringLength(randomString))).toBe(true);
    });
    it('should return the length of a passed string', function() {
        expect(stringLength(randomString)).toBe(randomString.length);
    });
});