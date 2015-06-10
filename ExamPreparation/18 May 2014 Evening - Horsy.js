function solve(args) {
    var size = args[0].split(' ').map(Number),
        moves = args.slice(1).map(function (row) {
            return row.split('').map(Number);
        }),
        rows = size[0],
        cols = size[1],
        row = rows - 1,
        col = cols - 1,
        pos,
        jumps = 0,
        points = 0;


    function getPoints(row, col) {
        return Math.pow(2, row) - col;
    }

    var horseMoves = [[0, 0], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

    while (true) {
        points += getPoints(row, col);
        pos = moves[row][col];
        if (pos == -1) {
            return 'Sadly the horse is doomed in ' + jumps + ' jumps';
        }
        moves[row][col] = -1;
        switch (pos) {
            case 1:
                row += horseMoves[1][0];
                col += horseMoves[1][1];
                break;
            case 2:
                row += horseMoves[2][0];
                col += horseMoves[2][1];
                break;
            case 3:
                row += horseMoves[3][0];
                col += horseMoves[3][1];
                break;
            case 4:
                row += horseMoves[4][0];
                col += horseMoves[4][1];
                break;
            case 5:
                row += horseMoves[5][0];
                col += horseMoves[5][1];
                break;
            case 6:
                row += horseMoves[6][0];
                col += horseMoves[6][1];
                break;
            case 7:
                row += horseMoves[7][0];
                col += horseMoves[7][1];
                break;
            case 8:
                row += horseMoves[8][0];
                col += horseMoves[8][1];
                break;
        }
        jumps += 1;
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return 'Go go Horsy! Collected ' + points + ' weeds';
        }
    }
}

console.log(solve(['3 5', '54561', '43328', '52388']));
console.log(solve(['3 5', '54361', '43326', '52188']));