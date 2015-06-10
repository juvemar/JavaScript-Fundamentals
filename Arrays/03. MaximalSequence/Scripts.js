function maxSequence(arr) {
    var current = 1,
        max = 1,
        winner,
        result = [],
        i,
        j;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            current += 1;
        } else {
            current = 1;
        }
        if (current > max) {
            max = current;
            winner = arr[i];
        }
    }
    for (j = 0; j < max; j++) {
        result.push(winner);
    }
    return result.join(', ');
}

console.log(maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));