<template>
  <div>
  <nav>
    <ul class='menu'>
      <li class='logo'>Soap Opera Addict</li>
      <li class='navbutton'><router-link to="/Login">S'identifier</router-link></li>
      <li class='navbutton'><router-link to="/Add">Ajouter</router-link></li>
      <li class='navbutton'><router-link to="/Home">Séries</router-link></li>
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
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
}
nav {
  padding: 5px 20px;
}
ul {
  list-style-type: none;
}

.menu li {
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
}

.logo {
    background-color: var(--primary);
    border: none;
    border-radius: 5px;
    color: var(--black);
    padding: 20px 20px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    width:10rem;
    height:3rem;
}
.navbutton {
    float: right;
    height: 50px;
}

</style>