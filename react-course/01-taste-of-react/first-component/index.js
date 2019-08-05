class Hello extends React.Component {
    render() {
        //We can only return one element at time.
        //return <h1>Hello there!</h1>;

        //But we CAN return it with multiple nested elements:
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));

//React components have historically been written using Classes. The recent addition of React 'Hooks' has allowed us to use Functions with many of the features of Class-based components as well.

function Hello2() {
    return (
        <div>
            <h1>Hello there, as a function!</h1>
            <h1>Hello there, as a function!</h1>
            <h1>Hello there, as a function!</h1>
        </div>
    );
}

ReactDOM.render(<Hello2/>, document.getElementById('root2'));