function solve(args) {
    var size = args[0].split(' ').map(Number),
        directions = args.slice(1).map(function (row) {
            return row.split(' ');
        }),
        rows = size[0],
        cols = size[1],
        pos,
        col = 0,
        row = 0,
        points = 0;

    function getPoints(row, col) {
        return Math.pow(2, row) + col;
    }

    while (true) {
        points += getPoints(row, col);
        pos = directions[row][col];
        directions[row][col] = null;
        if (pos == null) {
            return 'failed at (' + row + ', ' + col + ')';
        }
        switch (pos) {
            case 'dr':
                row += 1;
                col += 1;
                break;
            case 'ur':
                row -= 1;
                col += 1;
                break;
            case 'ul':
                row -= 1;
                col -= 1;
                break;
            case 'dl':
                row += 1;
                col -= 1;
                break;
        }
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return 'successed with ' + points;
        }
    }
}

console.log(solve(['3 5', 'dr dl dl ur ul', 'dr dr ul ul ur', 'dl dr ur dl ur']))