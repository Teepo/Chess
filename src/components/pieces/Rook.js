import { h, Component } from 'preact';

import { Svg } from './../../partials/Svg';

export class Rook extends Component {

    constructor(props) {

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
