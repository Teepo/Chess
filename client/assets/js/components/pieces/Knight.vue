<template @click="clickHandler">
    <Svg :name="`knight${this.cell.isBlack ? '-black' : '-white'}`" />
</template>

<script>

import { mapGetters } from 'vuex';

import Svg from './../Svg';

export default {

    name : "Knight",
    
    components : { Svg },

    props: {
        cell : { required : true }
    },

    computed : {
        ...mapGetters(['board'])
    },

    methods : {

        clickHandler : function() {

            const x = this.cell.x;
            const y = this.cell.y;

            [
                this.board[x + 2][y + 1],
                this.board[x + 2][y - 1],
                this.board[x - 2][y + 1],
                this.board[x - 2][y - 1]
            ]
            .filter(cell =>  cell !== null)
            .map(cell => {
                cell.isHighlight = true;
            })
        }
    }
}
</script>