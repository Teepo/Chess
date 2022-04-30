<template>
    <div :class="{
        'cell'               : true,
        'cell--is-highlight' : this.isHighlight,
        'cell--is-selected'  : this.isSelected,
        'cell--has-piece'    : hasPiece()
    }" @click="clickHandler">
        <component :is="getPieceComponent()" :cell="this" />
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

import EmptyPiece from './pieces/EmptyPiece';

import Rook   from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen  from './pieces/Queen';
import King   from './pieces/King';
import Pawn   from './pieces/Pawn';

export default {

    components : { EmptyPiece, Rook, Knight, Bishop, Queen, King, Pawn },

    props: {
        _x : { type : Number,  required : true },
        _y : { type : Number,  required : true },
    },

    computed : {
        ...mapGetters(['board'])
    },

    data : function() {

        return {

            isBlack     : false,
            isHighlight : false,
            isSelected  : false,

            number : this.y + 1,

            x : this._x,
            y : this._y,

            piece : null,
        };
    },

    methods : {

        getPieceComponent() {
            return this.piece?.name ?? this.board[this.x][this.y];
        },

        hasPiece() {
            return this.getPieceComponent() !== 'EmptyPiece';
        },

        updatePiece(piece) {
            this.piece = piece;
        },

        /**
         * @return array<Cell>
         */
        getHorizontalRight(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x]?.[cell.y+i]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getHorizontalLeft(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x]?.[cell.y-i]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getVerticalBottom(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x+i]?.[cell.y]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getVerticalTop(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x-i]?.[cell.y]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getDiagonalTopLeft(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x-i]?.[cell.y-i]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getDiagonalTopRight(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x-i]?.[cell.y+i]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getDiagonalBottomRight(cell) {

            const nexts = [];

            let i = 1;
            let c;

            while (c = this.$root.board[cell.x+i]?.[cell.y+i]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        /**
         * @return array<Cell>
         */
        getDiagonalBottomLeft(cell) {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[cell.x+i]?.[cell.y-i]) {

                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        clearHighlightAndSelectedState() {

            this.$root.board.map(row => {
                row.map(cell => {
                    cell.isSelected  = false;
                    cell.isHighlight = false;
                });
            });
        },

        /**
         * @param Cell        currentCell
         * @param array<Cell> nexts
         */
        resetHighlightAndSelectedState(currentCell, nexts) {

            this.$root.board.map(row => {
                row.map(cell => {

                    // On exclut la piece et les targets
                    // car on va les toggle plus tard
                    if (cell === currentCell
                        || nexts.includes(cell)) {
                        return;
                    }

                    cell.isSelected  = false;
                    cell.isHighlight = false;
                });
            });
        },

        /**
         * @param array<Cell> nexts
         * @param boolean     forceHighlight
         */
        highlightCell(nexts, forceHighlight) {

            nexts.map(cell => {

                cell.isSelected  = false;

                if (forceHighlight) {
                    cell.isHighlight = !cell.hasPiece();
                }
                else {
                    cell.isHighlight = cell.hasPiece() ? false : !cell.isHighlight;
                }
            });
        },

        clickHandler(event) {

            if (this.hasPiece() || this.isHighlight) {
                event.stopPropagation();
            }

            console.log('click on cell', this.isHighlight);

            if (this.isHighlight) {

                const cellSelected = this.$root.board.find(row => {
                    return row.find(cell => cell.isSelected );
                }).find(cell => cell.isSelected);

                console.log('selected cell', cellSelected);

                const oldX = cellSelected.x;
                const oldY = cellSelected.y;

                const oldPiece = this.$root.board[this.x][this.y];

                cellSelected.x = this.x;
                cellSelected.y = this.y;

                console.log('oldPiece', oldPiece.getPieceComponent());

                this.$root.board[this.x][this.y] = cellSelected;
                this.$root.board[oldX][oldY] = oldPiece;

                console.log(oldX, oldY);

                console.log(this.$root.board, this.$root.board[oldX][oldY].getPieceComponent(), oldPiece.getPieceComponent());

                this.updatePiece(cellSelected.piece);

                this.clearHighlightAndSelectedState();
            }
        }
    },

    mounted() {

        // cell color toggling
        if (this.x < 2) {
            this.isBlack = true;
        }
    }
}
</script>