import { Svg } from './../../partials/Svg';

export class Bishop extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `bishop${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
