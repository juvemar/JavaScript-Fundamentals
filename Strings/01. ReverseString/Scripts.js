function reverse(str) {
    var i,
        reversedStr = '';

    for (i = str.length - 1; i >= 0; i -= 1) {
        reversedStr += str[i];
    }

    return reversedStr;
}

var strToReverse = 'reversing the string';
console.log(reverse(strToReverse));