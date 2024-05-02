<template>
  <!-- search area -->
  <!-- <div class="search-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span class="close-btn"><i class="fas fa-window-close"></i></span>
          <div class="search-bar">
            <div class="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" v-model="text" placeholder="Keywords">
              <button @click="search">Search <i class="fas fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- end search area -->

  <!-- hero area -->
  <div class="hero-area hero-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 offset-lg-2 text-center">
          <div class="hero-text">
            <div class="hero-text-tablecell">
              <p class="subtitle">Wecome to this side of Internet</p>
              <h1>A blend of life and Tech.</h1>
              <div class="hero-btns">
                <router-link :to="{ name: 'blogs', params: { page:'tech' }}">Technology</router-link>
                
              </div>
              <div class="hero-btns">
                <router-link :to="{ name: 'blogs', params: { page:'tech' }}">Mindful Living</router-link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end hero area -->
  <!-- advertisement section -->
  <div>
    <div class="abt-section mb-150">
      <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <div class="abt-bg">
          <a href="" class="video-play-btn popup-youtube"><i class="fas fa-play"></i></a>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="abt-text">
          <p class="top-sub"></p>
          <h2>Hey there<span class="orange-text">This is Medhansh</span></h2>
          <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
          <a href="about.html" class="boxed-btn mt-4">know more</a>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
  <!-- end advertisement section -->

  <!-- latest blogs -->
  <div class="latest-news pt-150 pb-150">
    <div class="container">

<div class="row">
<div class="col-lg-8 offset-lg-2 text-center">
  <div class="section-title">	
    <h3><span class="orange-text">Blogs</span></h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
  </div>
</div>
</div>

<div class="row" id ="row-card">
<div class="col-lg-4 col-md-6">
  <div class="single-latest-news">
    <a href="single-news.html"><div class="latest-news-bg news-bg-1"></div></a>
    <div class="news-text-box">
      <h3><a href="single-news.html">blog 1</a></h3>
      <p class="blog-meta">
        <span class="author"><i class="fas fa-user"></i> Admin</span>
        <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
      </p>
      <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
      <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
    </div>
  </div>
</div>
<div class="col-lg-4 col-md-6">
  <div class="single-latest-news">
    <a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
    <div class="news-text-box">
      <h3><a href="single-news.html">blog 2</a></h3>
      <p class="blog-meta">
        <span class="author"><i class="fas fa-user"></i> Admin</span>
        <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
      </p>
      <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
      <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
    </div>
  </div>
</div>
<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
  <div class="single-latest-news">
    <a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
    <div class="news-text-box">
      <h3><a href="single-news.html">blog 3</a></h3>
      <p class="blog-meta">
        <span class="author"><i class="fas fa-user"></i> Admin</span>
        <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
      </p>
      <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
      <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
    </div>
  </div>
</div>
</div>


</div>
  
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
data() {
  return {
    text: '',
  };
},
methods: {
  search() {
    this.$router.push({ name: 'search', params: { id: this.text } });
  },
},
components: {
  RouterLink,
  RouterView
}
};
</script>

<style>
/* style of cards  */
.single-latest-news {
  background-color: #fff; 
  border-radius: 10px; 
  padding: 20px; 
  margin: 15px; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); 
}
.latest-news .row {
  justify-content: space-between;
  align-items: center; 

}
.latest-news .row .col-lg-12 {
  display: flex; 
  justify-content: space-between; 
}

#row-card{
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}

.single-latest-news h3 {
  text-align: center; 
}

/* centering content */
.latest-news .section-title h3, 
.hero-area .hero-text h1, 
.hero-area .hero-text p  
 {
  text-align: center; 
}
#view-more-button{
  justify-content: space-between;
  align-items: center; 
}

/*about section */

.abt-section .abt-text {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: right; 
}

.abt-section .abt-text h2 span.orange-text {
  text-align: center;
}

.latest-news .row-card, 
.abt-section {
  display: flex;
  justify-content: center; 
}

.latest-news .row-card .boxed-btn, 
.abt-section .boxed-btn {
  margin: 10px auto; 
}

/*Hero page styling*/
.hero-area {
  padding: 0;
  height: 100vh;
  width: 100vw; 
}

.hero-area .row {
  display: flex; 
  align-items: center; 
  justify-content: center; 
}

.hero-area .hero-btns {
  text-align: center; 
}

.hero-area .hero-btns a {
  display: inline-block;
  padding: 10px 20px; 
  border-radius: 5px; 
  background-color: orange; 
  color: #fff; 
  text-decoration: none; 
  font-weight: bold;
  transition: all 0.3s ease-in-out; 
}

.hero-area .hero-btns a:hover {
  background-color:  rgba(255, 166, 0, 0.796); 
}
.boxed-btn.mt-4{
  align-items: center;
}
</style>