<template>
    <div class="about">
      <h1>Home</h1>
      <div v-for="blog in result" :key="blog.id">
        <BlogCard />
        <router-link :to="{ name: 'blogDetails', params: { id: blog.id}}">
            <h2> {{ blog.topic }} </h2>
        </router-link>
      </div>
    </div>
  </template>
<script>
import axios from 'axios';
import BlogCard from '../../components/BlogCard.vue';
export default{
  props: ['page'],
    data(){
        return {
            result : [],
            searchQuery:'',
        }
      },
      components:{
        BlogCard,
      },

      method:{
        
      },

        mounted() {
        //if redirected from life blogs button

        if (this.page === "life"){
        const url = 'http://localhost:3000/api/v1/blogs';
        axios
        .get (url)
        .then((response) => {
            this.result = response.data.data.posts;
            console.log(this.result)
            
        })
        .catch((error) => console.log(error))
      }
        if (this.page == "tech"){
        const url = 'http://localhost:3000/api/v1/blogs';
        axios
        .get (url)
        .then((response) => {
            this.result = response.data.data.posts;
            console.log(this.result) 
        })
      }
        
    }
    }
</script>
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  