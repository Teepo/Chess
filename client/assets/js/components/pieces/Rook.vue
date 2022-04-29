<template @click="clickHandler">
    <Svg :name="`rook${this.cell.isBlack ? '-black' : '-white'}`" />
</template>

<script>

import { mapGetters } from 'vuex';

import Svg from './../Svg';

export default {

    name : "Rook",
    
    components : { Svg },

    props: {
        cell : { required : true }
    },

    computed : {
        ...mapGetters(['gridSize', 'board'])
    },

    methods : {

        clickHandler : function() {

            const x = this.cell.x;
            const y = this.cell.y;

            let cell;
            for (let i = x + 1; i <= this.gridSize.x; i++) {
                
                cell = this.board[i][y];

                if (cell.piece !== null) {
                    return;
                }

                cell.isHighlight = true;
            }
        }
    }
}
</script>