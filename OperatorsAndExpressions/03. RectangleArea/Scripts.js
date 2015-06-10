function area(width, height) {
    return 'A rectangle with parameters ' + width + ' and ' + height + ' has a area equal to ' + width * height;
}

for (i = 2, j = 3; i < 6; i++, j += 2) {
    console.log(area(i,j));
}