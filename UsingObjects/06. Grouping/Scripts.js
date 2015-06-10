function Person(firstname, personLastName, personAge) {
    this.firstname = firstname,
        this.lastname = personLastName,
        this.age = personAge
}

var people = [
    new Person('Georgi', 'Ivanov', 22),
    new Person('Petar', 'Panchev', 22),
    new Person('Todor', 'Tinkov', 32),
    new Person('Todor', 'Chochev', 15),
    new Person('Petar', 'Ivanov', 32),
    new Person('Georgi', 'Tinkov', 32),
    new Person('Todor', 'Chochev', 15),
    new Person('Todor', 'Ivanov', 33)
];


function groupBy(arr, prop) {
    var groupedArr = [],
        i,
        len;

    for (i = 0, len = arr.length; i < len; i++) {
        if (!groupedArr[arr[i][prop]]) {
            groupedArr[arr[i][prop]] = [];
        }
        groupedArr[arr[i][prop]].push(arr[i]);
    }

    return groupedArr;
}

console.log(groupBy(people, 'age'));