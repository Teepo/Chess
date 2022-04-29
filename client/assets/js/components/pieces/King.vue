<template>
   <Svg :name="`king${this.cell.isBlack ? '-black' : '-white'}`" />
</template>

<script>

import Svg from './../Svg';

export default {

    name : "King",
    
    components : { Svg },

    props: {
        cell : { required : true }
    }
}
</script>