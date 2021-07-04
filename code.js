function helloWorld() {
    return 'Hello, World!';
}

// Create a function that imitates String.charAt, returns
// the character at the input position
function stringCharAt(string, position) {
    if (typeof string !== 'string') return undefined;
    if (!Number.isInteger(position)) return undefined;
    if (position < 0 || position >= string.length) return '';
    return string[position];
}