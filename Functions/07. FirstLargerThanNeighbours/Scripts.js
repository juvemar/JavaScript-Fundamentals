function neighboursCheck(numbers) {
    var isLarger = false,
        i;
    for (i = 0; i < numbers.length; i += 1) {
        if (i === 0) {
            if (numbers[i] > numbers[i + 1]) {
                return i;
            }
        } else if (i === numbers.length - 1) {
            if (numbers[i] > numbers[i - 1]) {
                return i;
            }
        } else {
            if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
                return i;
            }
        }
    }
    return -1;
}

console.log(neighboursCheck([1, 2, 3, 4, 2, 6, 7, 8]));
console.log(neighboursCheck([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(neighboursCheck([1, 2, 3, 4, 5, 6, 7, 7]));