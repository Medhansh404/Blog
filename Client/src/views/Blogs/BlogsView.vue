<template>
    <div class="about">
      <h1>Home</h1>
      <div v-for="blog in blogsList" :key="blog.id">
        <router-link :to="{ name: 'blogDetails', params: { id: blog.id }}">
            <h2>{{blog.title}}</h2>
        </router-link>
      </div>
    </div>
  </template>
<script>
export default{
    data(){
        return {
            blogsList:[
                {title: 'Blog1', id: 1, details:'lorem'},
                {title: 'Blog2', id: 2, details:'lorem'},
                {title: 'Blog3', id: 3, details:'lorem'}
        ]
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
  