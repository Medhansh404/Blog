<template>

    <!-- search area -->
    <div class="search-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <span class="close-btn"><i class="fas fa-window-close"></i></span>
            <div class="search-bar">
              <div class="search-bar-tablecell">
                <h3>Search For:</h3>
                <input type="text" placeholder="Keywords">
                <button type="submit">Search <i class="fas fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end search area -->
  
    <!-- single article section -->
    <div class="mt-150 mb-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="single-article-section">
              <div class="single-article-text">
                <div class="single-article-bg"></div>
                <p class="blog-meta">
                  <span class="author"><i class="fas fa-user"></i> Admin</span>
                  <span class="date"><i class="fas fa-calendar"></i> {{ text.date }}</span>
                </p>
                <h2>{{ text.topic }}</h2>
                <p>{{ text.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end single article section -->
    
  
    <!-- copyright -->
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <p>Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>, All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 text-right col-md-12">
            <div class="social-icons">
              <ul>
                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end copyright -->
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        text: [],
      };
    },
    mounted() {
      const blogId = this.id;
      const url = 'http://localhost:3000/api/v1/blogs/' + blogId;
      axios
        .get(url, { id: blogId })
        .then((response) => {
          this.text = response.data.data.posts[0];
        })
        .catch((error) => console.log(error));
    },
  };
  </script>
  
  <style >
   
  </style>
  