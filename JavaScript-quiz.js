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
