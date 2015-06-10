function clone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    var copy = {};
    for (var prop in obj) {
        copy[prop] = clone(obj[prop]);
    }

    return copy;
}

var num = 23,
    obj = {name: 'John', age: 22};

console.log(clone(num));
console.log(clone(obj));

