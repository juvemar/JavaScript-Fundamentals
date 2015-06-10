function prime(num) {
    var isPrime;
    if (num < 2) {
        isPrime = false;
    }
    else {
        isPrime = false;
        for (var i = 2; i < 18; i++) {
            if (num % i === 0) {
                isPrime = true;
                break;
            }
        }
    }
    return 'The number ' + num + ' is prime! - ' + isPrime;
}

console.log(prime(29));
console.log(prime(109));
console.log(prime(19));
console.log(prime(48))
