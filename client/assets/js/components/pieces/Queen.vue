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

    props: {
        cell : { required : true }
    },

    methods: {

        getHorizontalRight() {
            
            const nexts = [];
            for (let cell of this.$root.board[this.cell.x]) {

                if (cell.y <= this.cell.y)
                    continue;
                if (cell.hasPiece())
                    break;

                nexts.push(cell);
            }

            return nexts;
        },

        getHorizontalLeft() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x][this.cell.y-i]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        getVerticalBottom() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x+i][this.cell.y]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        getVerticalTop() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x-i][this.cell.y]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        getDiagonalTopLeft() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x-i][this.cell.y-i]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        getDiagonalTopRight() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x-i][this.cell.y+i]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        getDiagonalBottomRight() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x+i][this.cell.y+i]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        getDiagonalBottomLeft() {

            const nexts = [];

            let i = 1;
            let c;
            while (c = this.$root.board[this.cell.x+i][this.cell.y-i]) {
                
                i++;

                if (c.hasPiece())
                    break;

                nexts.push(c);
            }

            return nexts;
        },

        clickHandler : function() {

            this.cell.isSelected = !this.cell.isSelected;

            let nexts = [];

            this.getHorizontalRight().map(cell => { nexts.push(cell); });
            this.getHorizontalLeft().map(cell => { nexts.push(cell); });
            this.getVerticalBottom().map(cell => { nexts.push(cell); });
            this.getVerticalTop().map(cell => { nexts.push(cell); });

            this.getDiagonalTopLeft().map(cell => { nexts.push(cell); });
            this.getDiagonalTopRight().map(cell => { nexts.push(cell); });
            this.getDiagonalBottomRight().map(cell => { nexts.push(cell); });
            this.getDiagonalBottomLeft().map(cell => { nexts.push(cell); });


            nexts = nexts.flat().filter(cell => !!cell);

            this.$parent.resetHighlightAndSelectedState(this.cell, nexts);

            this.$parent.highlightCell(nexts, this.cell.isSelected);
        }
    }
}
</script>