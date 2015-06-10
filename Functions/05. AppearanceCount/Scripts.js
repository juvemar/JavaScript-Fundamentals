function counter(numbers, num) {
    var count = 0,
        i;
    for (i = 0; i < numbers.length; i += 1) {
        if (num === numbers[i]) {
            count += 1;
        }
    }

    console.log('%d appears %d times in the array.', num, count);
}

function tester() {
    var numbers = [1, 2, 5, 3, 1, 2, 6, 3, 1],
        numbersToCount = [1, 2, 3, 5],
        j;

    for (j = 0; j < numbersToCount.length; j += 1) {
        counter(numbers, numbersToCount[j]);
    }
}

tester();