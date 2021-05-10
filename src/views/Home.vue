<template>
<div class='container'>
<Header title="Liste des séries" />
<input type="text" v-model="search" placeholder="Rechercher une série" />
<i class="fas fa-search"></i>
<Series @delete-serie="deleteSerie" :series="series" />
</div>
</template>

<script>
import Header from '../components/Header'
import Series from '../components/Series.vue'


export default {
    name: 'Home',
    components: {
        Header,
        Series,
    },
      data() {
          return{
            series: [],
            search: ''
          }
      },
      methods: {
    ajouterSerie(serie) {
      this.series = [...this.series, serie]
    },

    deleteSerie(id) {
      if(confirm('Es-tu sur de supprimer cette série ?')) {
        this.series = this.series.filter((serie) => serie.id !== id)
      }
    },
},
  created() {
    this.series = [
      {
        id: 1,
        titre: 'This is Us',
        description: 'Une histoire'
      },
      {
        id: 2,
        titre: 'Pretty',
        description: 'Une story'
      },
      {
        id: 3,
        titre: 'Mindhunter',
        description: 'Une pipou'
      },
    ]
  },
  computed: {
    filteredSeries: function() {
      return this.series.filter((serie) => {
        return serie.titre.match(this.search)
      });
    }
  }
}
</script>

<style scoped>
  body {
    margin: 0;
  }
</style>