<template>
    <div @click="clickHandler">
        <Svg :name="`king${this.cell.isBlack ? '-black' : '-white'}`" />
    </div>
</template>

<script>

import Svg from './../Svg';

export default {
    
    components : { Svg },

    props: {
        cell : { required : true }
    },

    data : () => {
        return { name : 'King' };
    },

    mounted() {
        this.cell.updatePiece(this);
    },

    methods: {

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            const board = this.$root.board;

            const x = this.cell.x;
            const y = this.cell.y;

            const nexts = [
                board[x + 1]?.[y + 1],
                board[x + 1]?.[y - 1],
                board[x - 1]?.[y + 1],
                board[x - 1]?.[y - 1],

                board[x + 1]?.[y],
                board[x - 1]?.[y],

                board[x]?.[y + 1],
                board[x]?.[y - 1]
            ]
            .filter(cell => !!cell);

            this.cell.resetHighlightAndSelectedState(this.cell, nexts);

            this.cell.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>