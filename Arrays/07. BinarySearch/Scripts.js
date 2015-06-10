function binarySearch(array, num, min, max) {
    if (num < array[min] || num > array[max]) {
        return 'Such a number does not exist in the array!';
    }

    var mid = Math.floor((min + max) / 2);
    if (min === max ) {
        return num + ' is on index ' + mid;
    }

    if (num < array[mid]) {
        max = mid - 1;
        return binarySearch(array, num, min, max);
    } else if (num > array[mid]) {
        min = mid + 1;
        return binarySearch(array, num, min, max);
    } else {
        return num + ' is on index ' + mid;
    }
}

var numbers = [1, 2, 3, 5, 7, 9, 12, 15, 16, 20];

console.log(binarySearch(numbers, 15, 0, numbers.length - 1));