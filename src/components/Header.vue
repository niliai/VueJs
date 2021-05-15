<template>
    <header>
        <h1> {{title}} </h1>
    </header>
</template>

<script>

    export default {
        name: "Header",
        props: {
            title: String,
        }
    }
</script>

<style scoped>
header {
    padding: 20px 20px 0;
    align-items: center;  
}
h1 {
    font-size: 30px;
}
</style>