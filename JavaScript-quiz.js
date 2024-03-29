/*/ Welcome to the JS quiz!

/* Question 1
 *
 * Write a function that takes two numbers and returns the largest number of the two.
 */

function question1(num1, num2) {
	return num1 > num2 ? num1 : num2;
}

console.log(question1(888, 289989));

/* Question 2
 *
 * Write a function that takes an array and returns the last 3 elements in the array.
 */
array1 = [ 1, 2, 3, 4, 5, 6, 89, 9 ];

function question2(array1) {
	return array1.slice(-3);
}

console.log(question2(array1));

/* Question 3
 *
 * Write a function which takes two arguments, with the second argument having a
 * default value of false.
 *
 * The function should return true if BOTH the first argument AND the second argument are
 * true, otherwise, it should return false.
 *
 * You will also have to edit the parameter list for this function.
 */

part2 = false;
part1 = true;
function question3(part1, part2) {
	return part1 === true && part2 === true ? true : false;
}

console.log(question3(part1, part2));

/* Question 4
 *
 * Write a function which takes a string and returns the string reversed.
 */

function question4(string1) {
	return string1.split('').reverse().join('');
}

string1 = 'blossom';
console.log(question4(string1));

/* Question 5
 *
 * Write a function which takes an array of strings and returns the ones
 * starting with the letter 'M' or 'm'
 */

array = [ 'Man', 'Water', 'mother', 'Purple', 'mile', 'Right', 'Prime' ];
function question5(array) {
	return array.filter((i) => i.startsWith('M') || i.startsWith('m'));
}

console.log(question5(array));

/* Question 6
 *
 * Write a function which takes an array of objects, containing countries and their capitals,
 * and return the capitals of countries whose *country name* starts with letter 'M' or 'm'
 * Example input:
 * [{country: "Spain", capital: "Madrid"}, {country: "Madagascar", capital: "Antananarivo"}]
 * Example output:
 * ["Antananarivo"]
 */

function question6(countries) {
	const array1 = countries.filter((i) => i.capital.startsWith('m') || i.capital.startsWith('M'));

	return array1.map((i) => i.capital);
}
var objArray = [
	{ country: 'Spain', capital: 'Madrid' },
	{ country: 'Madagascar', capital: 'Antananarivo' },
	{ country: 'Russia', capital: 'Moscow' }
];

console.log(question6(objArray));

/* Question 7
 *
 * Write a function which takes an array of Users and add an email address
 * containing their first name and '@codeyourfuture.io'
 * Example input:
 * [{firstName: 'Ada', lastName: 'Lovelace'}]
 * Example output:
 * [{firstName: 'Ada', lastName: 'Lovelace', email: 'ada@codeyourfuture.io'}]
 */

function question7(users) {
	return users.map((i) => i.firstName + i.lastName + '@codeyourfuture.io');
}

user1 = [ { firstName: 'Ada', lastName: 'Lovelace' } ];
console.log(question7(user1));

/* Question 8 (I need to finish it!)
 *
 * Write a class named Rectangle.
 *
 * The class should have
 * - an attribute called colour
 * - an attribute called height (with a default value of 10)
 * - an attribute called width (with a default value of 10)
 * - a constructor which takes those parameters
 * - a method called area, which returns the height multiplied by width
 */

class Rectangle {
	constructor(colour, height = 10, width = 10) {
		this.colour;
		this.height;
		this.width;
	} // TODO
}
var area = this.height * this.width;

function question8() {
	//Edit the class Rectangle above.
	//do NOT edit this function.
	return new Rectangle('red', 4);
}

/* Question 9 (I need to finish it!)
 *
 * Write a function which takes an array of Rectangles as defined in Question 8.
 * Return the sum of the areas of all Rectangles
 */
function question9(Rectangles) {
	// TODO
}
