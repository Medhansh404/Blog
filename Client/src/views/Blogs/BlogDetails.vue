<template>
    <h1>Blog Details Page</h1>
    <p>The blog id is {{id}} </p>
    <p> This is the content {{this.text}}</p>
</template>

<script>
import axios from 'axios';


export default {
    props: ['id'],
    data(){
        return {text:''}
    },
    mounted(){
        axios
        .post('/blogs', {id:this.id})
        .then(function(response){this.text = response; console.log(this.text);})
        .catch((error)=>console.log(error))
    }
}
</script>

<styles>

</styles>