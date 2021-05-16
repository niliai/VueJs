<template>
  <div class="grid-container">
    <div class="add-form">
      <div class="form-control">
        <label>Nom :</label>
        <input type="text" v-model="serie.titre" name="text" placeholder="Prison Break"/>
      </div>
      
      <div class="form-controldes">
        <label>Description :</label>
        <textarea name="description" rows="5" cols="35" v-model="serie.description" placeholder="Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader de prison."/>
      </div>
      
      <label> Qui aime cette série ?</label>
      <div class="check" v-for="user in tabUsers" :key="user.idUser">
        <input type="checkbox" v-bind:id="user.idUser" v-bind:name="user.idUser" v-bind:value="user.idUser" v-model="userListLike">
          <label v-bind:for="user.idUser"> {{user.pseudo}} </label>
      </div>

      <div class="form-control">
        <label>Ajouter une image</label>
        <input type="file" id="myFile" name="filename" />
      </div>
      
      <div class='btndiv'>
        <button @click="create()" class="btnform">Ajouter</button>
        <button @click="serie = {}" class="btncancel">Annuler</button>
        <router-link to="/Home"> Retourner à la page d'accueil</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AjouterSerie",
  data() {
    return {
      serie: {
        titre: "",
        description: "",
      },
    tabUsers: [],
    userListLike: [],
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.getSerie(this.$route.params.id);
    }
    this.getUsers();
  },
  methods: {
    create() {
      if (this.$route.params.id) {
        axios
          .put(
            "http://localhost:5000/api/serie/" + this.$route.params.id,
            this.serie
          )
          .then((response) => {
            console.log(response);
            this.$router.push({
              name: "Home",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:5000/api/serie/add", this.serie)
          .then((response) => {
            console.log(response);
            this.$router.push({
              name: "Home",
            });

            if(this.userListLike.length > 0) {
              console.log(response.data.insertId);
              this.addUserLike(response.data.insertId);
            }

          })
          .catch((error) => {
            console.log(error);
          });
        console.log("saved");
      }
    },
    getSerie(id) {
      axios
        .get("http://localhost:5000/api/serie/" + id)
        .then((response) => {
          this.serie = {
            titre: response.data[0].Titre,
            description: response.data[0].Description,
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  getUsers() {
      axios
        .get("http://localhost:5000/api/users")
        .then((response) => {
          this.tabUsers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  addUserLike(idSerie) {
    console.log("hello " + idSerie);
    let tabUserIdLike = this.getTabUserIdLike(idSerie);

     axios
     .post("http://localhost:5000/api/userlike", tabUserIdLike)
     .then((response) =>{
       console.log(response.data);
        })
        .catch((error) =>{
          console.log(error);
        });
  },
  getTabUserIdLike(newId){
    let userIdLike = [];

    for(let like of this.userListLike){
      userIdLike.push({"SerieId":newId, "UserId":like});
    }

    return userIdLike;
  }

  
}}
</script>

<style>
.add-form {
  margin-bottom: 40px;
  width: 300px;
  padding: 20px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  font-size: 14px;
}
.form-controldes {
  margin: 20px 0;
}
.form-controldes label {
  display: block;
}
.form-controldes input {
  width: 100%;
  height: 100px;
  font-size: 15px;
}

.form-control-check {
  display: flex;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

.check input {
    margin-right: 10px; 
}


.btnform {
  background-color: var(--erreur);
  border: none;
  color: var(--light);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
}

.btncancel {
  background-color: var(--erreur);
  border: none;
  color: var(--light);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 0px 5px;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
