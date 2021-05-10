<template>
<div class='grid-container'>
     <form @submit="onSubmit" class="add-form">
        <div class ="form-control">
            <label>Pseudo</label>
            <input type="text" v-model="text" name="text" placeholder="Ton pseudo"/>
            </div>
            <button @:click='adduser(user.iduser)' class="btnform"> Je m'inscris </button>
            <input type="reset" value="Annuler" class="btncancel">
            <router-link to="/Home"> Retourner à la page d'accueil</router-link>  
    </form>
    </div>
</template>
<script>
export default {
    name: 'AjouterPseudo',
    data() {
        return{
            pseudo: '',
        }
    },
    methods: {
    },
}
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