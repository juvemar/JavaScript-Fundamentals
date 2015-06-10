function asWord(digit) {
    switch (digit) {
        case 0:
            return digit + ' - zero';
            break;
        case 1:
            return digit + ' - one';
            break;
        case 2:
            return digit + ' - two';
            break;
        case 3:
            return digit + ' - three';
            break;
        case 4:
            return digit + ' - four';
            break;
        case 5:
            return digit + ' - five';
            break;
        case 6:
            return digit + ' - six';
            break;
        case 7:
            return digit + ' - seven';
            break;
        case 8:
            return digit + ' - eight';
            break;
        case 9:
            return digit + ' - nine';
            break;
    }
}

console.log(asWord(0));
console.log(asWord(1));
console.log(asWord(2));
console.log(asWord(3));
console.log(asWord(4));
console.log(asWord(5));
console.log(asWord(6));
console.log(asWord(7));
console.log(asWord(8));
console.log(asWord(9));