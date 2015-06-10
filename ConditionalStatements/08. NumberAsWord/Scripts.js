function asWord(number) {
    var ones = number % 10;
    var tens = Math.floor(number / 10) % 10;
    var hundreds = Math.floor(number / 100) % 10;
    var answer = '';

    if (number === 0) return 'zero';

    switch (hundreds) {
        case 1:
            answer += 'one hundred ';
            break;
        case 2:
            answer += 'two hundred ';
            break;
        case 3:
            answer += 'three hundred ';
            break;
        case 4:
            answer += 'four hundred ';
            break;
        case 5:
            answer += 'five hundred ';
            break;
        case 6:
            answer += 'six hundred ';
            break;
        case 7:
            answer += 'seven hundred ';
            break;
        case 8:
            answer += 'eight hundred ';
            break;
        case 9:
            answer += 'nine hundred ';
            break;
    }

    if (hundreds != 0 && (tens != 0 || ones != 0)) {
        answer += 'and ';
    }

    switch (tens) {
        case 1:
            switch (ones) {
                case 0:
                    answer += 'ten';
                    return answer;
                case 1:
                    answer += 'eleven';
                    return answer;
                case 2:
                    answer += 'twelve';
                    return answer;
                case 3:
                    answer += 'thirteen';
                    return answer;
                case 4:
                    answer += 'fourteen';
                    return answer;
                case 5:
                    answer += 'fifteen';
                    return answer;
                case 6:
                    answer += 'sixteen';
                    return answer;
                case 7:
                    answer += 'seventeen';
                    return answer;
                case 8:
                    answer += 'eighteen';
                    return answer;
                case 9:
                    answer += 'nineteen';
                    return answer;
            }
            break;
        case 2:
            answer += 'twenty';
            break;
        case 3:
            answer += 'thirty';
            break;
        case 4:
            answer += 'forty';
            break;
        case 5:
            answer += 'fifty';
            break;
        case 6:
            answer += 'sixty';
            break;
        case 7:
            answer += 'seventy';
            break;
        case 8:
            answer += 'eighty';
            break;
        case 9:
            answer += 'ninety';
            break;
    }

    if (tens != 0 && ones != 0) {
        answer += '-';
    }

    switch (ones) {
        case 1:
            answer += 'one';
            break;
        case 2:
            answer += 'two';
            break;
        case 3:
            answer += 'three';
            break;
        case 4:
            answer += 'four';
            break;
        case 5:
            answer += 'five';
            break;
        case 6:
            answer += 'six';
            break;
        case 7:
            answer += 'seven';
            break;
        case 8:
            answer += 'eight';
            break;
        case 9:
            answer += 'nine';
            break;
    }

    return answer;
}

console.log(asWord(754));
console.log(asWord(28));
console.log(asWord(601));
console.log(asWord(11));
console.log(asWord(0));
console.log(asWord(5));
console.log(asWord(990));