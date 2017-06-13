export class Svg extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (<svg viewBox="0 0 45 45">
                  <use xlinkHref={ `/svg/sprite.svg#${this.props.name}` } />
                </svg>);
    }
}
