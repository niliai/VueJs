<template>
  <div class="grid-container">
    <div class="navbar">
      <navbar />
    </div>
    <div class='body'>
      </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import navbar from "./components/navbar.vue";

export default {
  name: "app",
  components: {
    Footer,
    navbar,
  },
};
</script>

<style>
:root {
  --primary: #A2D2FF;
  --secondary: #8FD14F;
  --erreur: #FFC8DD;
  --light: #fff;
  --dark: black;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.02fr 0.02fr 0.02fr;
  grid-template-areas:
    "navbar"
    "body"
    "footer";
}
.navbar {
  grid-area: navbar;
}
.footer {
  grid-area: footer;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  grid-area: body;
  height: 100%;
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