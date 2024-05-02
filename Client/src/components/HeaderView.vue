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
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <a id="blog-button">Blogs</a>
                  <ul class="sub-menu">
                    <li>
                      <router-link :to="{ name: 'blogs', params: { page:'tech' }}">Technology</router-link>
                    </li>
                    <li><router-link to="/about">Mindful Living</router-link></li>
                  </ul>
                </li>
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
    return {};
  },
};
</script>

<style>
#blog-button{
padding-right: 100px;
}

.top-header-area {
  background-color: lightgray;
}

.sub-menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.sub-menu li {
  text-align: center;
}

.current-list-item {
  padding: 10px 20px;
  /* Set desired padding */
  background-color: #fff;
  /* Set background color to white */
  border: 1px solid #ddd;
  /* Add a border (optional) */
  color: #000;
  /* Set text color to black */
}

.current-list-item:hover {
  background-color: #eee;
  /* Add a hover effect (optional) */
}
</style>
