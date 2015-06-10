function pointChecker(x, y) {
    var isInsideCircle = ((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 3;
    var isOutsideRect = x <= -1 || x > 5 || y > 1 || y < -1;

    var answer = 'The point P(' + x + ', ' + y + ') is within the circle and out of the rectangle. - ';
    return answer + (isInsideCircle && isOutsideRect);
}

console.log(pointChecker(1, 4));
console.log(pointChecker(2.5, 2));
console.log(pointChecker(0, 1));
console.log(pointChecker(1, 2.5));