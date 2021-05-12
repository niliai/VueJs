<template>
<div id='series'>
<input type='text' v-model="serie.titre">
    <div v-for="(serie) in Series" :key="serie.idSerie">
    </div>
    </div>
</template>

<script>

export default {
    name: 'Series',
    data() {
        return {
        serie:{
            id: 0,
            titre: '',
            Description: '',
            iduser: 0,
        },
        Series: [],
        }
    },
    methods: {
     },
    mounted() {
        this.get_series();
    }
}
</script>
<style>
#series {
    background-color: beige;
    width: 300px;
    margin: 5px auto;
    padding: 5px;
}
</style>
