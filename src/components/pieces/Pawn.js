import { Svg } from './../../partials/Svg';

export class Pawn extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `pawn${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
