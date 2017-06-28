import React from 'react';

import { Svg } from './../../partials/Svg';

export class Rook extends React.Component {

    constructor(props: object) {

        super(props);

        this.isFocus = false;
    }

    /**
     *
     * @listens click
     */
    onClick() {

        this.isFocus = !this.isFocus;

        const x = this.props.cell.coords.x;
        const y = this.props.cell.coords.y;

        let cell;
        for (let i = x + 1; i <= this.props.App.state.gridSize.x; i++)
        {
            cell = this.props.App.getCell(i, y);

            if (cell.state.piece !== null) {
                return;
            }

            cell.setState({
                isHighlight : this.isFocus
            });
        }
    }

    /**
     *
     * @return {ReactElement}
     */
    render() {
        return <div onClick={this.onClick.bind(this)}>
                    <Svg name={ `rook${this.props.cell.isBlack ? '-black' : '-white'}` } />
                </div>;
    }
}

Rook.propTypes = {
    App  : React.PropTypes.object,
    cell : React.PropTypes.object
}
