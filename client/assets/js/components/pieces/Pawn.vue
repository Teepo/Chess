<template>
    <div @click="clickHandler">
        <Svg :name="`pawn${this.cell.isBlack ? '-black' : '-white'}`" />
    </div>
</template>

<script>

import Svg from './../Svg';

export default {

    name : 'Pawn',

    components : { Svg },

    props: {
        cell : { required : true }
    },

    data : () => {

        return {
            isMoved : false
        }
    },

    methods: {

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            const board = this.$root.board;

            const x = this.cell.x;
            const y = this.cell.y;

            const next1 = board?.[x - 1]?.[y] ?? null;
            const next2 = board?.[x - 2]?.[y] ?? null;

            const nexts = [next1, next2];

            this.cell.resetHighlightAndSelectedState(this.cell, nexts);

            // La piece devant est prise, le pion peut pas bouger
            if (next1.hasPiece()) {
                [next1, next2]
                .map(cell => {
                    cell.isSelected  = false;
                    cell.isHighlight = false;
                });
                return;
            }

            this.cell.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>