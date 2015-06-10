function sign(a, b, c) {
    var answer = 'The sign of the product of the numbers ' + a + ', ' + b + ' and ' + c + ' is ';
    if (a === 0 || b === 0 || c === 0) {
        return answer + 0;
    }
    var minusCounter = 0;
    if (a < 0) {
        minusCounter += 1;
    }
    if (b < 0) {
        minusCounter += 1;
    }
    if (c < 0) {
        minusCounter += 1;
    }
    if (minusCounter % 2 === 0) {
        return answer + '+';
    }
    return answer + '-';
}

console.log(sign(1, 0, 2));
console.log(sign(-1, 2, 2));
console.log(sign(-1, 2, -2));
console.log(sign(-1, -1, -2));