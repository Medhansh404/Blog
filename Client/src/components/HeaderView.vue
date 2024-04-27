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
                <img src="../public/logo.jpg" alt="">
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
                  <a>Blogs</a>
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
</template>


<script>
export default {
data() {
  return { };
},
};
</script>

<style>
.top-header-area{
  background-color: lightgray;
;

}
</style>
