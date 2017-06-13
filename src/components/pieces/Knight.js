export class Knight extends React.Component {

    constructor(props) {
        super(props)

        this.state = {Cell : null};

        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        this.props.Cell.setState({
            isHighlight: !this.props.Cell.state.isHighlight
        });
    }

    render() {
        return <span>Knight</span>;
    }
}
