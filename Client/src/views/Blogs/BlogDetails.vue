<template>
    <h1>{{ text.topic }}</h1>

    <p>  {{ text.description }}</p>
    <div></div>
    <p>  {{ text.content }}</p>
    <div></div>

</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            text: [],
        }
    },
    mounted() {
        const blogId = this.id
        const url = 'http://localhost:3000/api/v1/blogs/'+ blogId;
        axios
        .get (url, {id: blogId})
        .then((response) => {
            this.text = response.data.data.posts[0];
        })
        .catch((error) => console.log(error))
    }
}
</script>

<style>

</style>
