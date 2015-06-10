Array.prototype.remove = function (element) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        if (this[i] === element) {
            this.splice(i, 1);
        }
    }
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr);
arr.remove(1);
console.log(arr);
arr.remove(3);
console.log(arr);