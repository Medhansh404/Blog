<template>
  <div class="blogs">
    <h1>Blogs</h1>
    <div class="blog-container">
      <div v-for="(blog, index) in result" :key="blog.id" class="blog-card" :class="{ 'new-row': index % 3 === 0 && index !== 0 }">
        <BlogCard :blog="blog"/>
      </div>
    </div>
    <button class="view-more-button" @click="loadMoreBlogs">View More</button>
  </div>
</template>

<script>
import axios from 'axios';
import BlogCard from '../../components/BlogCard.vue';

export default {
  props: ['page'],
  data() {
    return {
      result: [],
      searchQuery: '',
    }
  },
  components: {
    BlogCard,
  },
  methods: {
    loadMoreBlogs() {
      // Logic to load more blogs
    }
  },
  mounted() {
    if (this.page === "life" || this.page === "tech") {
      const url = 'http://localhost:3000/api/v1/blogs';
      axios.get(url)
        .then((response) => {
          this.result = response.data.data.posts;
        })
        .catch((error) => console.log(error));
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .blogs {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .blog-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px; /* Add margin between blog cards and the button */
  }
  .blog-card {
    width: calc(33.33% - 10px); /* Adjust width to fit three cards in a row */
    margin-bottom: 20px; /* Add margin between blog cards */
  }
  .new-row {
    clear: both; /* Start a new row after every third card */
  }
  .view-more-button {
    padding: 10px 20px;
    background-color: #ff9d00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .view-more-button:hover {
    background-color: #0056b3;
  }
}
</style>
