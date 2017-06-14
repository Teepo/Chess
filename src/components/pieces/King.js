import React from 'react';

import { Svg } from './../../partials/Svg';

export class King extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return <Svg name={ `king${this.props.cell.isBlack ? '-black' : '-white'}` } />;
    }
}
