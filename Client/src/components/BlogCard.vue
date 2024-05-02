<template>				
<div class="col-lg-4 col-md-6">
    <div class="single-latest-news">
        <router-link :to="{ name: 'blogDetails', params: { id: blog.id}}"> <div class="latest-news-bg news-bg-1"></div></router-link>
        <div class="news-text-box">
            <h3><router-link :to="{ name: 'blogDetails', params: { id: blog.id}}">
             {{ blog.topic }} 
        </router-link></h3>
            <p class="blog-meta">
                <span class="author"><i class="fas fa-user"></i> Admin</span>
                <span class="date"><i class="fas fa-calendar"></i> {{blog.date}}</span>
            </p>
            <p class="excerpt">{{blog.content}}</p>
            <router-link :to="{ name: 'blogDetails', params: { id: blog.id}}"> view more </router-link>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        props:{
            blog: {},
        },
        data(){
            
        }
    }
</script>
<style scoped>
.single-latest-news {
  margin-bottom: 30px;
  /* Add more styling as needed */
}

.latest-news-bg {
  
}

.news-text-box {
  padding: 20px;
  background-color: #f9f9f9;
  /* Add more styling as needed */
}

.blog-meta {
  margin-bottom: 10px;
}

.read-more-btn {
  background-color: #ff7f0e;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.read-more-btn:hover {
  background-color: #e66000;
}
</style>