class Hello extends React.Component {
    render() {
        console.log(this.props.to);
        return <p>Hi {this.props.to} from {this.props.from}!</p>
    }
}