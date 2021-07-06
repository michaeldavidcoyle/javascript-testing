function helloWorld() {
    return 'Hello, World!';
}

/*
* Create a function that imitates String.charAt, returns
* the character at the input position
*/
function stringCharAt(string, position) {
    if (typeof string === 'string' && Number.isInteger(position)) {
        if (position >= 0 && position < string.length) {
            return string[position];
        }

        return '';
    }
}

// Create a function that reproduces the output of String.prototype.indexOf
function stringIndexOf(string, searchString, position=0) {
    if (typeof string !== 'string') return -1;
    if (typeof searchString !== 'string') return -1;

    if (searchString === '') {
        if (position < 0) return 0;
        if (position > string.length) return string.length;
        return position;
    }

    for (var index = position; index < string.length; index++) {
        if (string.slice(index, index + searchString.length) === searchString) return index;
    }

    return -1;
}

/*
* What if strings did not have a length property?
* Create a function that returns the length of a passed string.
*/
function stringLength() {}
