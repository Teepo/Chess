import React    from 'react';
import ReactDOM from 'react-dom';

import { Grid } from './components/Grid';

class Chess extends React.Component {

    constructor(props) {

        super(props)

        // <Cell /> list
        this.cells = [];

        this.state = {
            gridSize : {
                x : 8,
                y : 8
            }
        };
    }

    render() {

        return <div>
                   <Grid App={this} />
               </div>;
    }
}

ReactDOM.render(<Chess />, document.getElementById('app'));
