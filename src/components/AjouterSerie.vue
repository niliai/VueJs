<template>
<div class="grid-container">
    <form @submit="onSubmit" class="add-form">
        <div class ="form-control">
            <label>Nom :</label>
            <input type="text" v-model="serie.titre" name="text" placeholder="Prison Break"/>
            </div>
        <div class ="form-controldes">
            <label>Description :</label>
            <textarea name="description" rows="5" cols="35" v-model="serie.description" placeholder="Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader de prison."/>
            </div>
        <div class ="form-control">
        <label>Ajouter une image</label>
        <input type="file" id="myFile" name="filename">
        </div>
        <div btndiv>
            <button @:click='create()' class="btnform">Ajouter</button>
            <input type="reset" value="Annuler" class="btncancel">
            <router-link to="/Home"> Retourner à la page d'accueil</router-link>
        </div>
    </form>
            </div>
</template>

<script>
export default {
    name: 'AjouterSerie',
    data() {
        return{
          serie: {
            titre: '',
            Description: '',
        }
        }
    },
    methods: {
      create() {
      axios.post(this.url, this.serie).then((response) => {
        console.log(response);
        this.showCreate = false;
        this.get_series();
      })
      . catch(error => {
        console.log(error)
    });
      console.log("saved");
    },
      }
    };
</script>

<style>
.add-form {
  margin-bottom: 40px;
  width:300px;
  padding:20px;
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
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
  }

.btncancel {
    background-color: #ffafcc;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px 5px;
    cursor: pointer;
}
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }

};

</style>