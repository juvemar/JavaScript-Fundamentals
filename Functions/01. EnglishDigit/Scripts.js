function lastDigitAsWord(num) {
    var last = num % 10,
        message = 'The last digit is ';
    switch (last) {
        case 0:
            return message + 'zero';
        case 1:
            return message + 'one';
        case 2:
            return message + 'two';
        case 3:
            return message + 'three';
        case 4:
            return message + 'four';
        case 5:
            return message + 'five';
        case 6:
            return message + 'six';
        case 7:
            return message + 'seven';
        case 8:
            return message + 'eight';
        case 9:
            return message + 'nine';
        default :
            return 'Invalid number';
    }
}

console.log(lastDigitAsWord(3526));