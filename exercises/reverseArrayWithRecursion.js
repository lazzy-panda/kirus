
module.exports.reverseArrayWithRecursion = function (array) {
    if (array.length === 0) {
        return "";
    } else {
        return this.reverseArrayWithRecursion(array.slice(1)) + array[0];
    }
};
