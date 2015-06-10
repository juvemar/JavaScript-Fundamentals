function createLine(x1, y1, x2, y2) {
    var line = {
        p1: {
            x: x1,
            y: y1
        },
        p2: {
            x: x2,
            y: y2
        }
    };
    return line;
}

function calculateDistance(p1, p2) {
    return 'The distance is ' + Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}

function checkForTriangle(line1, line2, line3) {
    if (checkMatchingPoints(line1, line2) && checkMatchingPoints(line1, line3) && checkMatchingPoints(line3, line2)) {
        return 'A triangle is possible to be created!';
    }

}

function checkMatchingPoints(line1, line2) {
    if (line1.p1.x === line2.p1.x && line1.p1.y === line2.p1.y) {
        return true;
    } else if (line1.p2.x === line2.p2.x && line1.p2.y === line2.p2.y) {
        return true;
    } else if (line1.p1.x === line2.p1.x && line1.p2.y === line2.p2.y) {
        return true;
    } else if (line1.p2.x === line2.p2.x && line1.p1.y === line2.p1.y) {
        return true
    }
    return false;
}

var first = createLine(1, 2, 3, 4);
var second = createLine(1, 2, 3, 4);
var third = createLine(1, 2, 3, 4);

console.log(calculateDistance(newLine.p1, newLine.p2));