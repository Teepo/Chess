import { Svg } from './../../partials/Svg';

export class Rook extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `rook${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
