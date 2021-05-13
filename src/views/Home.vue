<template>
  <div class="container">
    <Header title="Liste des séries" />
    <Series/>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Series from "../components/Series.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Series,
    Footer,
  },
  data() {
    return {
      series: [],
      search: "",
    };
  },
  methods: {
    ajouterSerie(serie) {
      this.series = [...this.series, serie];
    },

    deleteSerie(id) {
      if (confirm("Es-tu sur de supprimer cette série ?")) {
        this.series = this.series.filter((serie) => serie.id !== id);
      }
    },
  },
  created() {},
  computed: {
    filteredSeries: function() {
      return this.series.filter((serie) => {
        return serie.titre.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
</style>
