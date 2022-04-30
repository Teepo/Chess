<template>
    <div @click="clickHandler">
        <Svg :name="`rook${this.cell.isBlack ? '-black' : '-white'}`" />
    </div>
</template>

<script>

import Svg from './../Svg';

export default {
    
    components : { Svg },

    props: {
        cell : { required : true },
    },

    data : () => {
        return { name : 'Rook' };
    },

    mounted() {
        this.cell.updatePiece(this);
    },

    methods : {

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            let nexts = [];

            this.cell.getHorizontalRight(this.cell).map(cell => { nexts.push(cell); });
            this.cell.getHorizontalLeft(this.cell).map(cell => { nexts.push(cell); });
            this.cell.getVerticalBottom(this.cell).map(cell => { nexts.push(cell); });
            this.cell.getVerticalTop(this.cell).map(cell => { nexts.push(cell); });

            nexts = nexts.flat().filter(cell => !!cell);

            this.cell.resetHighlightAndSelectedState(this.cell, nexts);

            this.cell.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>