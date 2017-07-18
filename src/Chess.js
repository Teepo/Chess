import { h, render, Component } from 'preact';

import { Grid } from './components/Grid';

class Chess extends Component {

    constructor(props) {

        super(props)

        // <Cell /> list
        this.cells = new Array(8);

        this.state = {
            gridSize : {
                x : 8,
                y : 8
            }
        };
    }

    /**
     * @param  {Number} x
     * @param  {Number} y
     *
     * @return {ReactElement}
     */
    getCell(x, y) {

        return (typeof this.cells[x] !== "undefined"
            && typeof this.cells[x][y] !== "undefined")
            ? this.cells[x][y] : null;
    }

    /**
     *
     * @return {ReactElement}
     */
    render() {
        return <Grid App={this} />;
    }
}

render(<Chess />,
    document.getElementById('app')
);
