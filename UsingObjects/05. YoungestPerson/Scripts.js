function createPerson(personFirstName, personLastName, personAge) {
    var person = {
        firstname: personFirstName,
        lastname: personLastName,
        age: personAge
    };

    return person;
}

var people = [],
    i;

for (i = 0; i < 5; i += 1) {
    people[i] = createPerson('Vanio', 'Petkov', 23 + i);
    console.log(people[i].firstname + ' ' + people[i].lastname + ' - ' + people[i].age);
}