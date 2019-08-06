class Machine extends React.Component {
    render() {
        let s1 = this.props.s1;
        let s2 = this.props.s2;
        let s3 = this.props.s3;
        let msg;
        if (s1 === s2 && s1 === s3) {
            msg = <h4>Winner, Winner Chicken Dinner!!</h4>
        } else {
            msg = <p>Sorry - you lose. Try again?</p>
        }
        return (
            <div>
                <p>{s1}{s2}{s3}</p>
                {msg}
                <br/>
                <hr />
            </div>
        )
    }
}

