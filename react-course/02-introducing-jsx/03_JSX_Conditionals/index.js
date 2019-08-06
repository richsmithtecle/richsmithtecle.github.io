//Create random number to display
function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

//Display random number
/*

class NumPicker extends React.Component {
    render() {
        return (
            <div>
                <h1>Your Number Is: {getNum()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
*/


//Display random number with message if number === 7 using ternary operator
/*

class NumPicker extends React.Component {
    render() {
        let num = getNum();
        return (
            <div>
                <h1>Your Number Is: {num}</h1>
                <p>{num === 7 ? 'You Win!' : 'Sorry, Try Again'}</p>
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
*/


//Display random number with message if number === 7 using ternary operator
/*

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your Number Is: {num}</h1>
                <p>{num === 7 ? 'You Win!' : 'Sorry, Try Again'}</p>
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
*/

//Display random number with message && image if number === 7 using ternary operator
/*

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your Number Is: {num}</h1>
                <p>{num === 7 ? 'You Win!' : 'Sorry, Try Again'}</p>
                {
                    num === 7
                    ? <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                    : null
                }
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
 */


//Display random number with message && image if number === 7 using else / if statement
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = 
                <div>
                    <h2>CONGRATS - YOU WIN!!</h2>
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                </div>
        } else {
            msg = <p>Sorry - you lose....</p>
        }
        return (
            <div>
                <h1>Your Number Is: {num}</h1>
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));

