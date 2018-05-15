
/**
 * Returns the sum of x + y unless x == y then its double the sum.
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