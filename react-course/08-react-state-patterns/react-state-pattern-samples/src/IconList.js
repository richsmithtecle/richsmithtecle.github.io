import React, { Component } from 'react';

class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            icons: []
        };
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({ icons: [...this.state.icons, newIcon] });
        console.log(this.state.icons);
    }
    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return (
            <div>
                <h2>List of Icons Should Appear Below:</h2>
                <h1>{icons}</h1>
                <button onClick={this.addIcon}>Click Here to Create Icons!</button>
            </div>
        );
    }
}

export default IconList;
