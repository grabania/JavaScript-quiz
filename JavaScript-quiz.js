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
