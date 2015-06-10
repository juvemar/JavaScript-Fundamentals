function seven(num) {
    if ((num % 1000 - num % 100) === 700) {
        return 'The third digit from right to left is 7: ' + num;
    }
    else {
        return 'The third digit from right to left is not 7: ' + num;
    }
}

console.log(seven(20349784));
console.log(seven(70));
console.log(seven(3785));
console.log(seven(37453));