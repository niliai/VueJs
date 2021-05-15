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
  --primary: #ddd;
  --dark: #333;
  --light: #fff;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2.6fr 0.2fr;
  gap: 0px 0px;
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
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
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