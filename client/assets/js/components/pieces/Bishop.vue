<template>
    <div @click="clickHandler">
        <Svg :name="`bishop${this.cell.isBlack ? '-black' : '-white'}`" />
    </div>
</template>

<script>

import Svg from './../Svg';

export default {

    name : "Bishop",
    
    components : { Svg },

    props : {
        cell : { required : true }
    },

    mounted() {
        this.cell.updatePiece(this);
    },

    methods : {

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            let nexts = [];

            this.cell.getDiagonalTopLeft(this.cell).map(cell => { nexts.push(cell); });
            this.cell.getDiagonalTopRight(this.cell).map(cell => { nexts.push(cell); });
            this.cell.getDiagonalBottomRight(this.cell).map(cell => { nexts.push(cell); });
            this.cell.getDiagonalBottomLeft(this.cell).map(cell => { nexts.push(cell); });

            nexts = nexts.flat().filter(cell => !!cell);

            this.cell.resetHighlightAndSelectedState(this.cell, nexts);

            this.cell.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>