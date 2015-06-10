function selectionSort(arr) {
    var sortedArr = [],
        min,
        toDelete,
        length = arr.length,
        i,
        j;
    for (i = 0; i < length; i++) {
        min = Number.MAX_VALUE;
        for (j = 0; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                toDelete = j;
            }
        }
        sortedArr.push(min);
        arr.splice(toDelete, 1);
    }
    return sortedArr.join(', ');
}

console.log(selectionSort([2, 3, 1, 8, 3, 5, 10, 0, -5]));