function biggest(a, b, c, d, e) {
    var answer = 'The biggest number is ';
    if (a >= b && a >= c && a >= d && a >= e) {
        return answer + a;
    }
    else {
        if (b >= a && b >= c && b >= d && b >= e) {
            return answer + b;
        }
        else {
            if (c >= b && c >= a && c >= d && c >= e) {
                return answer + c;
            }
            else {
                if (d >= b && d >= a && d >= c && d >= e) {
                    return answer + d;
                }
                else {
                    return answer + e;
                }
            }
        }
    }
}

console.log(biggest(5, 2, 2, 4, 1));
console.log(biggest(-2, -22, 1, 0, 0));
console.log(biggest(-2, 4, 3, 2, 0));