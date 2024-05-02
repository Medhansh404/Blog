<template>
  <!-- search area -->
  <div class="search-area">
    <!-- Your existing code for the search area -->
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
              <!-- Blog meta -->
              <p class="blog-meta">
                <span class="author"><i class="fas fa-user"></i> Admin</span>
                <span class="date"><i class="fas fa-calendar"></i> {{ text.date }}</span>
              </p>
              <!-- Blog topic -->
              <h2>{{ text.topic }}</h2>
              <!-- Blog content with styling -->
              <div class="blog-content">
                <!-- Use innerHTML to render content with HTML tags -->
                <p v-html="formattedContent"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end single article section -->

  <!-- copyright -->
  <div class="copyright">
    <!-- Your existing code for the copyright section -->
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
  // computed: {
  //   formattedContent() {
  //     //return this.text.content.replace(/\n/g, '</p><p>') if not null else return null;
  //   }
  // },
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

<style scoped>
.blog-content {
  font-family: 'Arial', sans-serif; /* Change to your desired font */
  font-size: 16px; /* Adjust font size as needed */
  line-height: 1.6; /* Adjust line height for better readability */
}

.blog-content p {
  margin-bottom: 20px; /* Add margin between paragraphs */
}
</style>
