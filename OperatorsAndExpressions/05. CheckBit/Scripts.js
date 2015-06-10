function bits(num) {
    var binary = num.toString(2);
    binary = ('0000000000000000' + binary).slice(-16);
    console.log('Your number is ' + binary);
    var answer = 'The third digit is ';

    var position = 3;
    var mask = 1 << position;
    var result = mask & num;
    var bit = result >> position;

    if (bit == 1) {
        return answer + 1;
    }
    else return answer + 0;
}

console.log(bits(34));
console.log(bits(8));
console.log(bits(98));
console.log(bits(234));
console.log(bits(1));