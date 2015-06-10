function neighboursCheck(numbers, pos) {
    var isLarger = false;

    if (pos === 0) {
        if (numbers[pos] > numbers[pos + 1]) {
            isLarger = true;
        }
    } else if (pos === numbers.length - 1) {
        if (numbers[pos] > numbers[pos - 1]) {
            isLarger = true;
        }
    } else {
        if (numbers[pos] > numbers[pos - 1] && numbers[pos] > numbers[pos + 1]) {
            isLarger = true;
        }
    }

    return 'The number of position ' + pos + ' is larger than its neighbours. - ' + isLarger;
}

console.log(neighboursCheck([1, 2, 3, 4, 2, 6, 7, 8], 3));
console.log(neighboursCheck([1, 2, 3, 4, 2, 6, 7, 8], 7));
console.log(neighboursCheck([1, 2, 3, 4, 2, 6, 7, 8], 0));