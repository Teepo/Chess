<template>
    <Svg :name="`bishop${this.cell.isBlack ? '-black' : '-white'}`" />
</template>

<script>

import Svg from './../Svg';

export default {

    name : "Bishop",
    
    components : { Svg },

    props: {
        cell : { required : true }
    }
}
</script>