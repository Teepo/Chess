import EmptyPiece from './pieces/EmptyPiece.js';
import Knight     from './pieces/Knight.js';

var Cell = React.createClass({

    getInitialState: function() {

        return {

            isBlack : false,
            isHighlight: false,

            coords: {
                x : this.props.x,
                y : this.props.y
            },

            letter : this.props.Row.state.letter,
            number : this.props.y + 1,

            piece : this.props.Grid.state.map[this.props.x][this.props.y]
        };
    },

    componentWillMount: function() {

        // cell color toggling
        if (((this.state.coords.x % 2 === 0) && (this.state.coords.y % 2 > 0))
          || (this.state.coords.x % 2 > 0)   && (this.state.coords.y % 2 === 0))
        {
            this.setState({
                isBlack : true
            });
        }

    },

    render: function() {

        if (typeof this.props.App.cells[this.state.coords.x] === "undefined")
            this.props.App.cells[this.state.coords.x] = [];

        this.props.App.cells[this.state.coords.x][this.state.coords.y] = this;

        var cellClassName = this.state.isBlack ? 'black' : '';
            cellClassName += this.state.isHighlight ? ' overlay blue' : '';

        var $piece = null;
        if (this.state.piece !== null
          && typeof this.state.piece !== "undefined")
        {
            // hmmmm ... !
            $piece = (new this.state.piece).render();
        }
        else
            $piece = <EmptyPiece Cell={this} />

        return <td className={cellClassName} onClick={this.onClick}>{$piece}</td>;
    }
});

module.exports = Cell;