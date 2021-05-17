<template>
  <div class="grid-container">
    <div class="add-form">
      <div class="form-control">
        <label>Pseudo</label>
        <input type="text" v-model="pseudo" name="text" placeholder="Ton pseudo"/>
      </div>
      <button @click="adduser()" class="btnform">Je m'inscris</button>
      <button @click="pseudo = ''" class="btncancel">Annuler</button>
      <router-link to="/Home"> Retourner à la page d'accueil</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AjouterPseudo",
  data() {
    return {
      pseudo: "",
    };
  },
  methods: {
    adduser() {
      if (this.pseudo !== "") {
        axios
          .post("http://localhost:5000/api/user/add", { pseudo: this.pseudo })
          .then((response) => {
            console.log(response);
            this.$router.push({
              name: "Home",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
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

.btnform {
  background-color: #8fd14f;
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
