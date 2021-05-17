<template>
  <div class='search'>
    <input type="text" v-model="search" @input="searchFilter()" placeholder="Rechercher une série"/>
      <div id="series">
        <div v-for="(serie, index) in Series" :key="serie.idSerie">
          <h1> {{ index + 1 }}. {{ serie.Titre }}&nbsp;&nbsp;<span style="font-size:16px;">
            <span @click="deleteSerie(serie.idSerie)"><i style="color:pink" class="fa fa-trash"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<span @click="update(serie.idSerie)">
                <i class="fa fa-edit"></i></span></span></h1>
        <div>{{ serie.Description }}</div>
        <span class='italique'>Liké(s) par : </span>
        
        <span v-for="like in tabLikes[index]" :key="like.pseudo"> {{ like.pseudo }}  ♥ </span><br>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Series",
  data() {
    return {
      search: "",
      serie: {
        titre: "",
      },
      Series: [],
      allSeries: [],
      tabLikes : []
    };
  },
  methods: {
// Récupérer les séries de la database
    getSeries() {
      axios
        .get("http://localhost:5000/api/serie")
        .then((response) => {
          this.Series = response.data;
          this.allSeries = response.data;

          for(let serie of this.Series){
              this.getLike(serie.idSerie);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getLike(idSerie) {
      axios
        .get("http://localhost:5000/api/userlike/" + idSerie)
        .then((response) => {
          this.tabLikes.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

// Barre de recherche
    searchFilter() {
      this.Series = this.allSeries.filter((data) =>
        data.Titre.toLowerCase().includes(this.search.toLowerCase())
      );
    },

// Supprimer une série
    deleteSerie(id) {
      if (confirm("Es-tu sur de supprimer cette série ?")) {
        axios
          .delete("http://localhost:5000/api/serie/delete/" + id)
          .then((response) => {
            this.getSeries();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
// Modifier id série
    update(id) {
      this.$router.push({
        name: "Update",
        params: { id: id },
      });
    },
  },
  mounted() {
    this.getSeries();
  },
};
</script>

<style>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 18px 0;
  box-sizing: border-box;
}
.search {
   padding: 20px;
   align-items: center;
}
.italique {
  font-style: italic;
}
</style>
