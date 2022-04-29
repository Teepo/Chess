<template>
    <div :class="{
        'cell'               : true,
        'cell--is-highlight' : this.isHighlight,
        'cell--is-selected'  : this.isSelected,
        'cell--has-piece'    : hasPiece()
    }" @click="clickHandler">
        <component :is="getPieceComponent()" :cell="getInstance()" />
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
        x : { type : Number,  required : true },
        y : { type : Number,  required : true },
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
        };
    },

    methods : {

        getInstance: function() {
            return this;
        },

        getPieceComponent() {
            return this.board[this.x][this.y];
        },

        hasPiece() {
            return this.getPieceComponent() !== 'EmptyPiece';
        },

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

            if (this.hasPiece()) {
                event.stopPropagation();
            }

            console.log('click on cell', this.isHighlight);
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