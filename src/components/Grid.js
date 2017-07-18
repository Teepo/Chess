import { h, render, Component } from 'preact';

import { Row } from './Row.js';

// :piece:
import { Rook   } from './pieces/Rook.js';
import { Knight } from './pieces/Knight.js';
import { Bishop } from './pieces/Bishop.js';
import { Queen  } from './pieces/Queen.js';
import { King   } from './pieces/King.js';
import { Pawn   } from './pieces/Pawn.js';

export class Grid extends Component {

    constructor(props) {

        super(props);

        this.state = {

            gridSize : {
                x : 8,
                y : 8
            },

            map : {
                0 : {
                    0 : Rook,
                    1 : Knight,
                    2 : Bishop,
                    3 : King,
                    4 : Queen,
                    5 : Bishop,
                    6 : Knight,
                    7 : Rook
                },
                1 : {
                    0 : Pawn,
                    1 : Pawn,
                    2 : Pawn,
                    3 : Pawn,
                    4 : Pawn,
                    5 : Pawn,
                    6 : Pawn,
                    7 : Pawn
                },
                2 : {
                    0 : null,
                    1 : null,
                    2 : null,
                    3 : null,
                    4 : null,
                    5 : null,
                    6 : null,
                    7 : null
                },
                3 : {
                    0 : null,
                    1 : null,
                    2 : null,
                    3 : null,
                    4 : null,
                    5 : null,
                    6 : null,
                    7 : null
                },
                4 : {
                    0 : null,
                    1 : null,
                    2 : null,
                    3 : null,
                    4 : null,
                    5 : null,
                    6 : null,
                    7 : null
                },
                5 : {
                    0 : null,
                    1 : null,
                    2 : null,
                    3 : null,
                    4 : null,
                    5 : null,
                    6 : null,
                    7 : null
                },
                6 : {
                    0 : Pawn,
                    1 : Pawn,
                    2 : Pawn,
                    3 : Pawn,
                    4 : Pawn,
                    5 : Pawn,
                    6 : Pawn,
                    7 : Pawn
                },
                7 : {
                    0 : Rook,
                    1 : Knight,
                    2 : Bishop,
                    3 : Queen,
                    4 : King,
                    5 : Bishop,
                    6 : Knight,
                    7 : Rook
                }
            }
        };
    }

    render() {

        return <table className="grid">
                    <tbody>
                        {[...Array(this.props.App.state.gridSize.x)].map((o, index) => {
                            return <Row key={index} x={index} App={this.props.App} Grid={this} />
                        })}
                    </tbody>
                </table>;
    }
}
