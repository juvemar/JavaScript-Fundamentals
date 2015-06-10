function trapezoid(a, b, h) {
    var answer = ' The area of the trapezoid with dimensions a = ' + a + ', b = ' + b + ', h = ' + h + ' is ';
    return answer + ((a + b) / 2) * h;
}

console.log(trapezoid(2, 1, 33));
console.log(trapezoid(2, 3, 4));