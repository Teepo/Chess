import React from 'react';

import { Svg } from './../../partials/Svg';

export class Knight extends React.Component {

    constructor(props) {

        super(props);
    }

    onClick() {

        const x = this.props.cell.coords.x;
        const y = this.props.cell.coords.y;

        const cellDestination = [
            this.props.App.getCell(x + 2, y + 1),
            this.props.App.getCell(x + 2, y - 1),
            this.props.App.getCell(x - 2, y + 1),
            this.props.App.getCell(x - 2, y - 1)
        ].filter(cell => {
            return cell !== null;
        });

        cellDestination.map(cell => {

            cell.setState({
                isHighlight : true
            });
        });
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>
                    <Svg name={ `knight${this.props.cell.isBlack ? '-black' : '-white'}` } />
                </div>;
    }
}
