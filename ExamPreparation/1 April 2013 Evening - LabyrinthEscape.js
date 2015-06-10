function solve(args) {
    var size = args[0].split(' ').map(Number),
        position = args[1].split(' ').map(Number),
        directions = args.slice(2).map(function (line) {
            return line.split(' ').toString();
        }),
        rows = size[0],
        cols = size[1],
        row = position[0],
        col = position[1],
        cells = 1,
        sum = 0,
        pos,
        used = [];

    function getSum(row, col) {
        return (cols) * row + 1 + col;
    }

    function isUsed(row, col) {
        if (used[row + ' ' + col]) {
            return true;
        }
    }

    while (true) {
        sum += getSum(row, col);
        used[row + ' ' + col] = true;
        pos = directions[row][col];
        switch (pos) {
            case 'l':
                col -= 1;
                break;
            case 'r':
                col += 1;
                break;
            case 'u':
                row -= 1;
                break;
            case 'd':
                row += 1;
                break;
        }
        if (isUsed(row, col)) {
            return 'lost ' + cells;
        }
        cells += 1;
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return 'out ' + sum;
        }
    }
}

console.log(solve(["3 4", "1 3", "lrrd", "dlll", "rddd"]));
console.log(solve(["5 8", "0 0", "rrrrrrrd", "rludulrd", "durlddud", "urrrldud", "ulllllll"]));
console.log(solve(["5 8", "0 0", "rrrrrrrd", "rludulrd", "lurlddud", "urrrldud", "ulllllll"]));