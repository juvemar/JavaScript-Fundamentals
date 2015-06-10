function solve(args) {
    var size = args[0].split(' ').map(Number),
        position = args[1].split(' ').map(Number),
        moves = args.slice(2).map(function (line) {
            return line.split(' ').map(Number);
        }),
        rows = size[0],
        cols = size[1],
        jumps = size[2],
        row = position[0],
        col = position[1],
        line = 0,
        points = 1,
        used = [],
        currentJumps = 0,
        number = 1;

    for (var i = 0; i < rows; i += 1) {
        used[i] = [];
        for (var j = 0; j < cols; j += 1) {
            used[i][j] = number++;
        }
    }

    //function getPoints(row, col) {
    //    return (cols) * row + 1 + col;
    //}

    //function isUsed(row, col) {
    //    if (used[r//ow + ' ' + col]) {
    //        return true;
    //    }
    //}

    while (true) {
        if (line == jumps) {
            line = 0;
        }
        //points += getPoints(row, col);
        currentJumps += 1;
        //used[row + ' ' + col] = true;
        row += moves[line][0];
        col += moves[line][1];
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return 'escaped ' + points;
        }
        if (used[row][col] == 0) {
            return 'caught ' + currentJumps;
        }
        points += used[row][col];
        //if (isUsed(row, col)) {
        //    return 'caught ' + currentJumps;
        //}

        used[row][col] = 0;

        line += 1;
    }
}

console.log(solve(['6 7 3', '0 0', '2 2', '-2 2', '3 -1']));