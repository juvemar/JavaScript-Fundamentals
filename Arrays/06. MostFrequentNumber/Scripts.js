function mostFrequentNumber(numbers) {
    var currentFrequency,
        mostFrequent = 1,
        winner,
        i,
        j;
    for (i = 0; i < numbers.length; i++) {
        currentFrequency = 0;
        for (j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                currentFrequency += 1;
            }
        }
        if (currentFrequency > mostFrequent) {
            mostFrequent = currentFrequency;
            winner = numbers[i];
        }
    }
    console.log('%d (%d times)', winner, mostFrequent);
}

mostFrequentNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);