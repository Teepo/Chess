<template>
    <div @click="clickHandler">
        <Svg :name="`queen${this.cell.isBlack ? '-black' : '-white'}`" />
    </div>
</template>

<script>

import Svg from './../Svg';

export default {

    name : "Queen",
    
    components : { Svg },

    props : {
        cell : { required : true }
    },

    methods : {

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            let nexts = [];

            console.log('horizontal right', this.cell);

            this.$parent.getHorizontalRight(this.cell).map(cell => { nexts.push(cell); });
            this.$parent.getHorizontalLeft(this.cell).map(cell => { nexts.push(cell); });
            this.$parent.getVerticalBottom(this.cell).map(cell => { nexts.push(cell); });
            this.$parent.getVerticalTop(this.cell).map(cell => { nexts.push(cell); });

            this.$parent.getDiagonalTopLeft(this.cell).map(cell => { nexts.push(cell); });
            this.$parent.getDiagonalTopRight(this.cell).map(cell => { nexts.push(cell); });
            this.$parent.getDiagonalBottomRight(this.cell).map(cell => { nexts.push(cell); });
            this.$parent.getDiagonalBottomLeft(this.cell).map(cell => { nexts.push(cell); });

            nexts = nexts.flat().filter(cell => !!cell);

            this.$parent.resetHighlightAndSelectedState(this.cell, nexts);

            this.$parent.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>