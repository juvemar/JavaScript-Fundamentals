function point(x, y) {
    if ((x * x + y * y) <= (5 * 5)) {
        return 'The point is inside the circle!';
    }
    else {
        return 'The point is outside the circle!';
    }
}

console.log(point(-2, 0));
console.log(point(0, 0));
console.log(point(1, 1.655));