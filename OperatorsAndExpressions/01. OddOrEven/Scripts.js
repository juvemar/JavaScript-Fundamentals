function isEven(num) {
    return num % 2 === 0 ? num + ' is even!' : num + ' is odd!';
}
for (var i = -8; i < 50; i += 3) {
    console.log(isEven(i));
}