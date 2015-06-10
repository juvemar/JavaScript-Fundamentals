function reverse(num) {
    var reversed = '',
        i;

    if (num < 0) {
        num = (-num);
        reversed += '-';
    }

    num = num.toString();

    for (i = num.length - 1; i >= 0; i -= 1) {
        reversed += num[i];
    }

    return reversed;
}

console.log(reverse(-234.5));