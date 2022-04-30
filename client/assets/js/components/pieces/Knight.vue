<template>
    <div @click="clickHandler">
        <Svg :name="`knight${this.cell.isBlack ? '-black' : '-white'}`" />
    </div>
</template>

<script>

import Svg from './../Svg';

export default {

    name : "Knight",
    
    components : { Svg },

    props: {
        cell : { required : true }
    },

    methods : {

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            const board = this.$root.board;

            const x = this.cell.x;
            const y = this.cell.y;

            const nexts = [
                board[x + 2]?.[y + 1],
                board[x + 2]?.[y - 1],
                board[x - 2]?.[y + 1],
                board[x - 2]?.[y - 1],

                board[x + 1]?.[y + 2],
                board[x + 1]?.[y - 2],
                board[x - 1]?.[y + 2],
                board[x - 1]?.[y - 2]
            ]
            .filter(cell => !!cell);

            this.cell.resetHighlightAndSelectedState(this.cell, nexts);

            this.cell.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>