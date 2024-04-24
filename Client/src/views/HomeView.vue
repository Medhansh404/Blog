<template>
  <!-- header -->
  <div class="top-header-area" id="sticker">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12 text-center">
          <div class="main-menu-wrap">
            <!-- logo -->
            <div class="site-logo">
              <router-link to="/">
                <!-- Replace src with your logo path -->
                <img src="" alt="">
              </router-link>
            </div>
            <!-- menu start -->
            <nav class="main-menu">
              <ul>
                <li class="current-list-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>

                <li>
                  <a href="#">Blogs</a>
                  <ul class="sub-menu">
                    <li>
                      <router-link :to="{ name: 'blogs', params: { page:'tech' }}">Technology</router-link>
                    </li>
                    <li><router-link to="/about">Mindful Living</router-link></li>
                  </ul>
                </li>
                <!-- <li><router-link to="/contact">Contact</router-link></li> -->
              </ul>
            </nav>
            <a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
            <div class="mobile-menu"></div>
            <!-- menu end -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end header -->

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

<div class="row">
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
<div class="row">
<div class="col-lg-12 text-center">
  <a href="news.html" class="boxed-btn">View More</a>
</div>
</div>
</div>
  </div>
  <!-- end latest news -->

  <!-- footer -->
  <div class="footer-area">
    <!-- Your footer content here -->
  </div>
  <!-- end footer -->
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

<style scoped>
/* Import CSS styles */
@import url('@/assets/css/all.min.css');
@import url('@/assets/bootstrap/css/bootstrap.min.css');
@import url('@/assets/css/owl.carousel.css');
@import url('@/assets/css/magnific-popup.css');
@import url('@/assets/css/animate.css');
@import url('@/assets/css/meanmenu.min.css');
@import url('@/assets/css/main.css');
@import url('@/assets/css/responsive.css');
</style>