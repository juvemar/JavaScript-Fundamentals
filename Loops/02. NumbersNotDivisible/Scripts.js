function notDivisible(n) {
    var currentNum = 1;
    while (currentNum <= n) {
        if (currentNum % 3 != 0 && currentNum % 7 != 0) {
            console.log(currentNum);
        }
        currentNum += 1;
    }
}

notDivisible(25);