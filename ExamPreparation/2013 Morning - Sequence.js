function solve(numbers) {
    var arr = [],
        i,
        count = 1,
        newSeq = true;

    arr = numbers.slice(1).map(Number);

    for (i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] > arr[i + 1]) {
            count += 1;
        }
    }

    return count;
}

var numbers1 = ['6', '1', '3', '-5', '8', '7', '-6'],
    numbers2 = ['7', '1', '2', '-3', '4', '4', '0', '1'];

console.log(solve(numbers2));