function maxSum(arr) {
    var array = [],
        i,
        j,
        bestSum = -2000000,
        currentSum = 0;

    array = arr.slice(1).map(Number);

    for (i = 0; i < array.length; i += 1) {
        currentSum += array[i];
        if (currentSum > bestSum) {
            bestSum = currentSum;
        }
        if (i === array.length - 1) {
            return bestSum;
        }
        for (j = i + 1; j < array.length; j += 1) {
            currentSum += array[j];
            if (currentSum > bestSum) {
                bestSum = currentSum;
            }
        }
        currentSum = 0;
    }

    return bestSum;
}


var arrTest = ['9',
                '-9', '-8', '-8', '-7', '-6', '-5', '-1', '-7', '-6'];
console.log(maxSum(arrTest));