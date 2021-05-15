<template>
  <div>
  <nav class='nav'>
    <ul>
      <li class='logo'>Soap Opera Addict</li>
      <button class='navbutton'><router-link to="/Home">Séries</router-link></button>
      <button class='navbutton'><router-link to="/Add">Ajouter</router-link></button>
      <button class='navbutton'><router-link to="/Login" class='log'>S'identifier</router-link></button>
      <router-view></router-view>
      </ul>
    </nav>
    </div>
</template>

<script>

    export default {
        name: "navbar",
        props: {
            title: String,
        },

    }
</script>
<style scoped>

.nav {
  margin: 10px;
}
.logo {
    background-color: #A2D2FF;
    border: none;
    border-radius: 5px;
    color: black;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    width:10rem;
    height:3rem;
}
.navbutton {
    float: right;
    border: 0;
    height: 50px;
    font-size: 1rem;
    text-align: center;
    background-color: white;
  
}
.button {
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 40px 90px;
};

.log {
  background-color:aqua;
}
.nav ul {
  display: grid;
  grid-gap: 20px;
  list-style-type: none;
  padding: 0;
  grid-template-columns: repeat(4, 1fr);
}
.nav li {
	display: inline-block;
  list-style: none;
  text-align: center;
  margin: 0 30px;
  cursor: pointer;
}
</style>