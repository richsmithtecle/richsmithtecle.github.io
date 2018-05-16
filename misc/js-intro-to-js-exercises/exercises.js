
/**
 * 1. Returns the sum of x + y unless x == y then its double the sum.
 * @param {Number} x the first number to add 
 * @param {Number} y the second number to add 
 */
function sumDouble(x, y) {

    let answer;

    if (x === y) {
        answer = (x + y) * 2;
    } else {
        answer = x + y;
    }

    return answer;
}

/**
 * 2. Returns 'True' if any of three given numbers is greater than 12 and less that 20. 
 * @param {Number} a is the first age given to compare 
 * @param {Number} b is the second age given to compare 
 * @param {Number} c is the third age given to compare 
 */
function hasTeen(a, b, c) {

    let answer;

    if (a > 12 && a < 20) {
        answer = true;
    } else if (b > 12 && b < 20) {
        answer = true;
    } else if (c > 12 && c < 20) {
        answer = true;
    }
    else {
        answer = false;
    }

    return answer;
}

/**
 * 3. Returns "true" if two given numbers have the same last digit
 * @param {Number} x first given number 
 * @param {Number} y second given number 
 */
function lastDigit(x, y) {
    let answer;
    if (x % 10 === y % 10) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}


/**
 * 4. Returns "red" or "blue" if a given string starts with that color, and returns and empty string "" if it starts with anything else
 * @param {String} givenColor is the string given to test against
 */
function seeColor(givenColor) {

    let answer;

    let color = Array.from(givenColor)

    if ((color[0] == "b") && (color[1] == "l") && (color[2] == "u") && (color[3] == "e")) {
        answer = "blue";
    } else if ((color[0] == "r") && (color[1] == "e") && (color[2] == "d")) {
        answer = "red";
    } else {
        answer = ""
    }

    return answer;
}

/**
 * 5. Returns the middle three characters from a string of odd length.
 * @param {String} givenWord is the string given to test against.
 */
function middleThree(givenWord) {

    let answer;

    let startIndex = (givenWord.length / 2) - 1;

    answer = givenWord.substr(startIndex, 3);
    return answer;
}

/**
 * 6. Returns true if first two and last chars of a string are the same. 
 * @param {String} givenString the string to check
 */
function frontAgain(givenString) {

    let answer;

    let word = Array.from(givenString);

    if (word[0] == word[word.length - 2] && word[1] == word[word.length - 1]) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

/**
 *7. Function that given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if weare on vacation, displays the weeday name, and the time in the form of "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be 10:00" and weekends it should be "off"."
 * @param {Number} day 
 * @param {Boolean} vac 
 */
function alarmClock(day, vac) {

    let answer;


    // const daysOfTheWeek = {
    //     0: 'Sunday',
    //     1: 'Monday',
    //     2: 'Tuesday'
    // };

    //const daysOfTheWeek = ['Sunday', 'Monday', ...];


    if (day === 0 && vac === false) {
        answer = "Sunday 10:00";
    } else if (day === 0 && vac === true) {
        answer = "Sunday off";
    } else if (day === 1 && vac === false) {
        answer = "Monday 7:00";
    } else if (day === 1 && vac === true) {
        answer = "Monday 10:00";
    } else if (day === 2 && vac === false) {
        answer = "Tuesday 7:00";
    } else if (day === 2 && vac === true) {
        answer = "Tuesday 10:00";
    } else if (day === 3 && vac === false) {
        answer = "Wednesday 7:00";
    } else if (day === 3 && vac === true) {
        answer = "Wednesday 10:00";
    } else if (day === 4 && vac === false) {
        answer = "Thursday 7:00";
    } else if (day === 4 && vac === true) {
        answer = "Thursday 10:00";
    } else if (day === 5 && vac === false) {
        answer = "Friday 7:00";
    } else if (day === 5 && vac === true) {
        answer = "Friday 10:00";
    } else if (day === 6 && vac === false) {
        answer = "Saturday 10:00";
    } else if (day === 6 && vac === true) {
        answer = "Saturday off";
    }

    return answer;
}


/**
 *8. A function that given an array of ints of even length, returns a new array length 2 containing the middle two elements from the original array. If the original array length is not even, or at least 2 elements in length, return an empty array.
 * @param { Number*} givenArray 
 */
function makeMiddle(givenArray) {
    let answer;

    if (givenArray.length < 2 || givenArray.length % 2 == 1) {
        answer = [];
    } else {
        let startIndex = (givenArray.length / 2) - 1;
        answer = [givenArray[startIndex], givenArray[startIndex + 1]];
    }

    return answer;
}



/**
 * 9. Removes even numbers from an array and returns only the odd numbers.
 * Uses JavaScript ".filter" function
 * https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206
 * 
 * MDN .filter reference article https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @param {Number*} arr 
 */
function oddOnly(arr) {

    let odd = arr.filter(val => {
        return val % 2 === 1;
    });

    return odd;
}




/**
 * 11. Squirrel Cigar Party
 * @param {Number*} numCigars 
 * @param {Boolean} isWeekend 
 */
function cigarParty(numCigars, isWeekend) {
    let answer;

    if ((numCigars > 39 && numCigars < 61) && isWeekend == false) {
        answer = true;
    } else if (numCigars > 39 && isWeekend == true) {
        answer = true;
    } else answer = false;

    return answer;
}

/**
 * 12. FizzBuzz
 * @param {Number*} num 
 */
function fizzBuzz(num) {
    let answer;

    if (num % 15 == 0) {
        answer = "FizzBuzz";
    } else if (num % 3 == 0) {
        answer = "Fizz";
    } else if (num % 5 == 0) {
        answer = "Buzz";
    } else {
        answer = num;
    }
    return answer;
}