//Task 01: Assign all the possible JavaScript literals to different variables.
var int = 5;
var float = 3.4;
var bool = true;
var undef = undefined;
var string = 'sda';
var arr = [1,2];
var obj = {name: 'Kuncho', age: 5};
var funct = function () {return;
};
var nullable = null;

//Task 02: Create a string variable with quoted text in it.
// For example: `'How you doin'?', Joey said'.
var example = '"How you doin?", Joey said';
console.log('\nTask 02');
console.log(example);

//Task 03: Try typeof on all variables you created.
console.log('Task 03');
console.log('integer: ' + typeof int);
console.log('float: ' + typeof float);
console.log('boolean: ' + typeof bool);
console.log('undefined: ' + typeof undef);
console.log('string: ' + typeof string);
console.log('array: ' + typeof arr);
console.log('object: ' + typeof obj);
console.log('function: ' + typeof funct);
console.log('null: ' + typeof nullable);

//Task 04: Create null, undefined variables and try typeof on them.
console.log('\nTask 04');
console.log('undefined: ' + typeof undef);
console.log('null: ' + typeof nullable);