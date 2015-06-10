function exchange(a, b){
    if(b < a){
        var temp;
        temp = a;
        a = b;
        b = temp;
        return 'Values were exchanged: ' + a + ' ' + b;
    }
    else
    return 'Values were not exchanged: ' + a + ' ' + b;
}

console.log(exchange(5, 2));
console.log(exchange(3, 4));
console.log(exchange(5.5, 4.5));