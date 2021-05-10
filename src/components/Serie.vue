<template>
<div id= 'Series'>
    <h3>{{ serie.titre }}
        <i @click="onDelete(serie.id)" class="fas fa-trash"></i>
        <i class="far fa-edit"></i>
    </h3>
    <p>{{ serie.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Serie',
    props: ['serie'],
    data() {
        return {}
    },
    methods: {
        onDelete(id) {
        this.$emit('delete-serie', id)
        },
    },
}
</script>

<style>
#series {
    background-color: beige;
    width: 300px;
    margin: 5px auto;
    padding: 5px;
}
.fas {
    color: green;   
}
.p {
    display: flex;
}

</style>