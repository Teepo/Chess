import Cell from './Cell.js';

export default class Row extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            x : this.props.x,
            letter : String.fromCharCode(97 + this.props.x)
        };
    }

    render() {
        return <tr>
                  {[...Array(this.props.App.state.gridSize.y)].map(function(o, index) {
                      return <Cell key={index} x={this.props.x} y={index} App={this.props.App} Row={this} Grid={this.props.Grid} />
                  }.bind(this))}
               </tr>
    }
}