//Our React app can be named anything we want, but it is conventional to use 'App'
class App extends React.Component {
    render() {
        return (
            //Add Components to 'App'
            <div>
                {/* Comments in JSX must be wrapped in curly braces */}
                <Hello />   {/* Hello.js Component */}
                <NumPicker /> {/* NumPicker.js Component */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));