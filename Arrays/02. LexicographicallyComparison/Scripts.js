function comparison(firstArr, secondArr) {
    var notEqual = 'Arrays are not equal!',
        equal = 'Arrays are equal!',
        i;
    if (firstArr.length !== secondArr.length) {
        return notEqual;
    }
    for (i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            return notEqual;
        }
    }
    return equal;
}

console.log(comparison(['a', 's', 'D'], ['a', 's', 'd']));
console.log(comparison(['a', 's', 'd'], ['a', 's', 'd']));
console.log(comparison(['a', 's'], ['a', 's', 'd']));

