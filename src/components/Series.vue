<template>
<div id='series'>
<input type='text' v-model="serie.titre">
    <div v-for="(serie) in Series" :key="serie.idSerie">
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import Serie from 'Serie';

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
        url:"http://localhost:5000/api/serie/"
        }
    },
    methods: {
        get_series() {
            axios.get(this.url)
            .then( (response) => {
                this.Series = response.data;
                console.log(this.series)
            })
            .catch ( (err) => {
                console.log(err);
            })
        }
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
