import { h, Component } from 'preact';

import { Svg } from './../../partials/Svg';

export class Pawn extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isMoved : false
        };
    }

    onClick() {

        const x = this.props.cell.coords.x;
        const y = this.props.cell.coords.y;

        const next1 = this.props.App.getCell(x + 1, y);
        const next2 = this.props.App.getCell(x + 2, y);

        const cellDestination = [
            next1,
            next2.state.piece !== null ? next2 : null
        ].filter(cell => {
            return cell !== null;
        });

        console.log(cellDestination);

        cellDestination.map(cell => {

            cell.setState({
                isHighlight : true
            });
        });
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>
                    <Svg name={ `pawn${this.props.cell.isBlack ? '-black' : '-white'}` } />
                </div>;
    }
}
