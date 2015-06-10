function order(a, b, c) {
    if(a >= b)
    {
        if(b >= c){
            return a + ' ' + b + ' ' + c;
        }
        else{
            return a + ' ' + c + ' ' + b;
        }
    }
    else{
        if(b >= a)
        {
            if(a >= c){
                return b + ' ' + a + ' ' + c;
            }
            else{
                return b + ' ' + c + ' ' + a;
            }
        }
        else{
            if(b >= a){
                return c + ' ' + b + ' ' + a;
            }
            else{
                return c + ' ' + a + ' ' + b;
            }
        }
    }
}

console.log(order(5, 1, 2));
console.log(order(-2, 1, -2));
console.log(order(4, 3, -2));
console.log(order(5, 0, -2.5));