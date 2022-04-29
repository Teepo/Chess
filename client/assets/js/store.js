import { createStore } from 'vuex';

export default createStore({
    
    state: {
        gridSize : {
            x : 8,
            y : 8
        },
        board : [
            [ 'Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook' ],
            [ 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn' ],
            [ 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece' ], 
            [ 'EmptyPiece', 'Pawn', 'EmptyPiece', 'EmptyPiece', 'Bishop', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece' ],
            [ 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece' ],
            [ 'Pawn', 'EmptyPiece', 'Pawn', 'EmptyPiece', 'Pawn', 'EmptyPiece', 'EmptyPiece', 'EmptyPiece' ],
            [ 'Pawn', 'Pawn', 'EmptyPiece', 'Pawn', 'Queen', 'Pawn', 'Pawn', 'Pawn' ],
            [ 'Rook', 'Knight', 'Bishop', 'EmptyPiece', 'King', 'EmptyPiece', 'Knight', 'Rook' ]
        ]
    },
    getters : {
        gridSize : state => { return state.gridSize ; },
        board    : state => { return state.board;     },
    },
    mutations: {
        UPDATE_BOARD_STATE : (state, board) => {
            state.board = board;
        },
    },
    actions: {
        SET_BOARD_STATE : ({ commit }, board) => { commit('UPDATE_BOARD_STATE', board); },
    }
});
