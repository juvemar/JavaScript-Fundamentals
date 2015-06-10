function solve(params) {
    var s = params[0],
        count = 0,
        current = 0,
        i,
        j,
        k;

    for (i = 0; i < s / 4 + 1; i += 1) {
        for (j = 0; j < s / 10 + 1; j += 1) {
            for (k = 0; k < s / 3 + 1; k += 1) {
                current = i * 4 + j * 10 + k * 3;
                if (current == s) {
                    count += 1;
                    current = 0;
                    break;
                } else if (current > s) {
                    current = 0;
                    break;
                }
            }
        }
    }

    return count;
}

console.log(solve(7));
console.log(solve(10));
console.log(solve(40));