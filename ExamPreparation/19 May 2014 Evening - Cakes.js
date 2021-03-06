function solve(params) {
    var s = params[0], c1 = params[1], c2 = params[2], c3 = params[3];
    var answer = 0,
        current,
        i,
        j,
        k;

    for (i = 0; i < s / c1 + 1; i += 1) {
        for (j = 0; j < s / c2 + 1; j += 1) {
            for (k = 0; k < s / c3 + 1; k += 1) {
                current = i * c1 + j * c2 + k * c3;
                if (current <= s && current > answer) {
                    answer = current;
                }
            }
        }
    }

    return answer;
}


console.log(solve([110, 13, 15, 17]));
console.log(solve([20, 11, 200, 300]));
console.log(solve([110, 19, 29, 39]));