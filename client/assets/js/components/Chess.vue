<template>
    <div class="grid" @click="clickOutsideHandler">
        <template v-for="(item, x) in [...Array(this.gridSize.x)]">
            <Cell
                v-for="(item, y) in [...Array(this.gridSize.y)]"
                :key="y" :_x="x" :_y="y"
                ref="board"
            />
        </template>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

import Cell from './Cell';

export default {

    components : { Cell },

    computed : {
        ...mapGetters(['gridSize'])
    },

    mounted : function() {
        this.buildTraversablePiecesData();
    },

    methods : {

        buildTraversablePiecesData() {

            this.$root.board = Array.from(Array(8), () => [...Array(8)]);

            this.$refs.board.map(piece => {
                this.$root.board[piece.x][piece.y] = piece;
            });
        },

        clickOutsideHandler() {

            console.log('click global');
            
            this.$root.board.map(row => {
                row.map(cell => {
                    cell.isSelected  = false;
                    cell.isHighlight = false;
                });
            });
        }
    }
}

</script>