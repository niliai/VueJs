<template>
    <footer>
      <p>{{ footerText }}</p>
      </footer>
</template>
<script>
export default {
  data() {
    return {
      footerText: 'Copyright Alicia Decruyenaere 2021'
    }
  }
}
</script>

<style>
.footer {
  background-color: var(--primary);
  padding: 10px;
  text-align: center;
}
</style>
