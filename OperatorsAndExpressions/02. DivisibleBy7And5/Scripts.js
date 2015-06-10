function divisible(num) {
    return (num % 5 === 0 && num % 7 === 0) ? num + ' is divisible by 7 and 5!' : num + ' is not divisible by 7 and 5!';
}

for (var i = 30; i < 80; i += 5) {
    console.log(divisible(i));
}