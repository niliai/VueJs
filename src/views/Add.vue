<template>
<div class='container'>
    <Header title="Ajouter des séries" />
    <AjouterSerie @ajouter-serie="ajouterSerie" />
</div>
</template>

<script>
import Header from '../components/Header'
import AjouterSerie from '../components/AjouterSerie.vue'


export default {
    name: 'Add',
    components: {
        AjouterSerie,
        Header,
    },
    data() {
        return {
            serie: [],
        }
    },
    methods: {
    ajouterSerie(serie) {
      this.series = [...this.series, serie]
    },
    },
}
</script>
<style scoped>

  body {
    margin: 0;
  }
</style>