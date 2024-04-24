<template>
  <div class="about">
    <h1>Home</h1>
    <div v-for="blog in result" :key="blog.id">
      <router-link :to="{ name: 'blogDetails', params: { id: blog.id}}">
          <h2> {{ blog.topic }} </h2>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default{
  props:['id'],
  data(){
      return {
          result : [],
      }
    },
      mounted() {
         //redirected from the search query
        //console.log(this.id)
        const url = `http://localhost:3000/api/v1/search?text=`+ this.id;
        axios
        .get (url)
        .then((response) => {
            this.result = response.data.data.posts; 
            //console.log(this.result)
        })
      
      
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
