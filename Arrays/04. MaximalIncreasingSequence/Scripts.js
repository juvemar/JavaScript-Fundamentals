function maxIncreasing(arr) {
    var current = 1,
        max = 1,
        last = 0,
        result = [],
        i,
        j;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            current += 1;
            if (current > max) {
                max = current;
                last = i + 1;
            }
        } else {
            current = 1;
        }
    }
    for (j = last - max + 1; j <= last; j++) {
        result.push(arr[j]);
    }
    return result.join(', ');
}

console.log(maxIncreasing([3, 2, 3, 4, 2, 2, 3, 4, 6]));