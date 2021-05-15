<template>
<div class='container'>
    <Header title="Devenir utilisateur" />
    <AjouterPseudo @ajouter-pseudo="AjouterPseudo" />
</div>
</template>

<script>
import AjouterPseudo from '../components/AjouterPseudo.vue'
import Header from '../components/Header'

    export default {
        name: "Login" ,
        components: {
        AjouterPseudo,
        Header,
    },
        data() {
            return{}
        },
        methods: {},
    }
</script>
<style>

body {
    margin: 0;
  }
</style>