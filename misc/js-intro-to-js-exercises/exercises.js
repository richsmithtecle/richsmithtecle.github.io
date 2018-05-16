
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

    // if (((a || b || c) > 12) && ((a || b || c) < 20)) {
    //     answer = true;
    // } else {
    //     answer = false;
    // }

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
 * 
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
 * 
 * @param {String} givenWord Returns middle 3 chars from a string
 */
function middleThree(givenWord) {

    let answer;

    //find the start position in the array / string for our three letters
    let startIndex = (givenWord.length / 2) - 1;

    answer = givenWord.substr(startIndex, 3);
    return answer;
}

/**
 * Returns true if first two and last chars of a string are the same. 
 * @param {String} givenString the string to check
 */
function frontAgain(givenString) {

    let answer;

    let word = Array.from(givenString);

    if (word[0] == word[word.length - 2] && word[1] == word[word.length - 1]) {
        // if ((word[0] && word[1]) == (word[word.length - 1] && word[word.length - 2])) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}


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

function makeMiddle(givenArray) {
    let answer;


    //Odd length or less than 2
    if (givenArray.length < 2 || givenArray.length % 2 == 1) {
        answer = [];
    } else {
        let startIndex = (givenArray.length / 2) - 1;
        answer = [givenArray[startIndex], givenArray[startIndex + 1]];
    }
    //Even length array && greater length 2

    return answer;
}

function oddOnly(nums) {

    let answer;

    let newArray = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] % 2 == 1) {
            // answer = newArray.push(i);
            newArray[newArray.length] = nums[i];
        } else {
            answer = [];
        }
    }

    return answer;
}


function cigarParty(numCigars, isWeekend) {
    let answer;

    if ((numCigars > 39 && numCigars < 61) && isWeekend == false) {
        answer = true;
    } else if (numCigars > 39 && isWeekend == true) {
        answer = true;
    } else answer = false;

    return answer;
}



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