function equation(a, b, c) {
    var d = b * b - 4 * a * c;
    var coeffs = 'a = ' + a + '; b = ' + b + '; c = ' + c + ';';
    if (d < 0) {
        return coeffs + '\nNo real roots!';
    }
    return coeffs + '\nx1 = ' + ((-b + Math.sqrt(d)) / (2 * a)) + ';\n' + 'x2 = ' + ((-b - Math.sqrt(d)) / (2 * a)) + ';';
}

console.log(equation(2, 5, -3));
console.log(equation(-1, 3, 0));
console.log(equation(5, 2, 8));