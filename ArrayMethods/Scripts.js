//Problem 01
/*Write a function for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders*/

console.log('Problem 01:');
var separator = '===========================';
function makePerson(firstname, lastname, age, gender) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    };
}

var firstNames = ['Marin', 'Ivan', 'Georgi', 'Peter', 'Yohan', 'Laura', 'Tervel', 'Vqra', 'Sonia', 'Stanislava'],
    lastNames = ['Kamenov', 'Kolev', 'Petrov', 'Ganchev', 'Toshev', 'Maneva', 'Donev', 'Angelova', 'Aleksova', 'Toteva'],
    age = [23, 15, 13, 14, 19, 30, 34, 18, 12, 28],
    gender = [false, false, false, false, false, true, false, true, true, true],
    i,
    people = [];

console.log('Created array of people:')
for (i = 0; i < 10; i += 1) {
    people[i] = makePerson(firstNames[i], lastNames[i], age[i], gender[i]);
    console.log(people[i]);
}
console.log(separator);

//Problem 02.
/*Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 Use only array methods and no regular loops (for, while)*/

console.log('Problem 02:');
var overEighteen = people.every(function checkAge(item) {
    return item.age >= 18;
});

console.log('Does the array contain only people over 17?:');
console.log(overEighteen);
console.log(separator);

//Problem 03.
/*Write a function that prints all underaged persons of an array of person
 Use Array#filter and Array#forEach
 Use only array methods and no regular loops (for, while)*/

console.log('Problem 03:');
console.log('People younger than 18:');
var underEighteen = people.filter(function checkAge(item) {
    return item.age < 18;
}).forEach(function print(item) {
    console.log(item);
});
console.log(separator);

//Problem 04.
/*Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
 Use only array methods and no regular loops (for, while)*/

console.log('Problem 04:');
var averageAgeFemales = people.filter(function women(item) {
    return item.gender;
}).reduce(function calculate(sum, person) {
    return sum + person.age;
}, 0);

console.log('Average age of all females: ' + averageAgeFemales);
console.log(separator);

//Problem 05.
/*Write a function that finds the youngest male person in a given array of people and prints his full name
 Use only array methods and no regular loops (for, while)
 Use Array#find*/

console.log('Problem 05:');
Array.prototype.find = function (callback) {
    var i,
        len;
    for (i = 0, len = this.length; i < len; i += 1) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};

var youngest = people.sort(function sortByAge(a, b) {
    return a.age - b.age;
}).find(function (item) {
    return !item.gender;
});

console.log('The youngest person is ' + youngest.firstname + ' ' + youngest.lastname);
console.log(separator);

//Problem 06.
/*Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)*/

console.log('Problem 06:');
var group = people.reduce(function grouping(callback, item) {
    if (callback[item.firstname[0]]) {
        callback[item.firstname[0]].push(item);
    } else {
        callback[item.firstname[0]] = [item];
    }
    return callback;
}, {});

console.log(group);