import { h, Component } from 'preact';

import { Svg } from './../../partials/Svg';

export class King extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `king${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
