import { Grid } from './components/Grid.js';

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
