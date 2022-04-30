<template></template>

<script>

export default {

    props: {
        cell : { required : true },
    },

    data : () => {
        return { name : 'EmptyPiece' };
    },

    mounted() {
        this.cell.updatePiece(this);
    },
}
</script>