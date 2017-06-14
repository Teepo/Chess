import React from 'react';

import { Svg } from './../../partials/Svg';

export class Knight extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `knight${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
