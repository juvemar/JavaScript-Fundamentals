function minMax() {
    var sequence = [3, 0, -10, 34, -25, 64, 34, 12, -19];
    var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;

    for (var i = 0; i < sequence.length; i++) {
        if (max < sequence[i]) {
            max = sequence[i];
        } else if (min > sequence[i]) {
            min = sequence[i];
        }
    }

    console.log('Min = ' + min);
    console.log('Max = ' + max);
}

minMax();