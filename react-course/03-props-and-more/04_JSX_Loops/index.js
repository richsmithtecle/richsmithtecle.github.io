class App extends React.Component {
    render() {
        return (
            <div>
                <Friends
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friends
                    name="Tom"
                    hobbies={['Running', 'Climbing', 'Cooking']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));