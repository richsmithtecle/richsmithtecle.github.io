class Machine extends React.Component {
    render() {
        {
        /*
        Refactor this by using ES6 destructering:
        let s1 = this.props.s1;
        let s2 = this.props.s2;
        let s3 = this.props.s3;
        */
        }
        const { s1, s2, s3 } = this.props;
        const wheels = { color: 'blue', fontSize: '24px'}
        let msg;
        if (s1 === s2 && s2 === s3) {
            msg = <h4>Winner, Winner Chicken Dinner!!</h4>
        } else {
            msg = <p>Sorry - you lose. Try again?</p>
        }
        return (
            // Note use of 'className' vs 'class" for CSS
            <div className="Machine">
                <h3 style={wheels}>Slot Machine</h3>
                <p style={{fontSize:'50px'}}>
                    {s1}{s2}{s3}
                </p>
                {msg}
            </div>
        )
    }
}
//inline styles use camelCase

//If adding more than one propery to inline styles, create variable to hold those styles and apply