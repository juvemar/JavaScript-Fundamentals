function biggest(a, b, c) {
    var answer = 'The biggest number between ' + a + ', ' + b + ', ' + c + ' is ';
    if (a >= b) {
        if (a >= c) {
            return answer + a;
        }
    }
    else {
        if (b >= c) {
            if (b >= a) {
                return answer + b;
            }
        }
        else {
            return answer + c;
        }
    }
}

console.log(biggest(5, 2, 2));
console.log(biggest(-3, -2, -2));
console.log(biggest(-2, 4, 3));
console.log(biggest(5, -2.5, 0));