import { h, Component } from 'preact';

import { Svg } from './../../partials/Svg';

export class Bishop extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `bishop${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
