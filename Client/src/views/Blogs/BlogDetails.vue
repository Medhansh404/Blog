<template>
    <h1>Blog Details Page</h1>
    <p>The blog id is {{ id }} </p>
    <p> This is the content {{ this.text }}</p>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            text: ''
        }
    },
    mounted() {
        const blogId = this.id
        axios
        .post('http://localhost:3000/', {id: blogId})
        .then((response) => {
            this.text = response.data.message; // Assuming you want to display the message from the backend
            console.log(this.text);
        })
        .catch((error) => console.log(error))
    }
}
</script>

<style>
/* Your styles here */
</style>
