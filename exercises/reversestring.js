// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

module.exports.reverse_string_one = function (str) {
    return str.split("").reverse().join("");
};

module.exports.reverse_string_two = function (str) {
    let reversed = "";
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
};

module.exports.reverse_string_three = function (str) {
    return str.split("").reduce((rev, char) => char + rev, "")
};

module.exports.reverse_string_with_recursion = function (str) {
    if (str === "") {
        return "";
    } else {
        return this.reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
    }
};
