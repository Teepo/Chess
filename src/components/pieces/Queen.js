import { Svg } from './../../partials/Svg';

export class Queen extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `queen${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
