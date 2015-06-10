function hasProperty(obj, prop) {
    return obj.name + ' has a property ' + prop + ' -> ' + obj.hasOwnProperty(prop);
}

var student = {
    name: 'Peter',
    age: 18,
    id: 123345
};

console.log(hasProperty(student, 'age'));
console.log(hasProperty(student, 'gender'));