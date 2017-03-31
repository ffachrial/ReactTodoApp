function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Danica', 'Rishad'];
var groupB = ['Naveen'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Firman', 42];
var personTwo = ['Grace', 35];

function greetingParent (a, b) {
  console.log('Hi ' + a + ', you are ' + b);
}

greetingParent(...person);
greetingParent(...personTwo);

var names = ['Rishad', 'Danica'];
var final = [...names, 'Naveen'];

final.forEach(function (a) {
  console.log('Hi ' + a);
});
