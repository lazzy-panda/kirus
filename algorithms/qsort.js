// Алгоритм быстрой сортировки
module.exports.qsort = function (array) {
    if (array.length === 0) {
        return [];
    }
    let left = [];
    let right = [];
    let pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left[left.length] = array[i];
        } else {
            right[right.length] = array[i];
        }
    }
    return this.qsort(left).concat( pivot, this.qsort(right) );
}