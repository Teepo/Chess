import { h, Component } from 'preact';

import { Svg } from './../../partials/Svg';

export class Queen extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `queen${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
