<template>
  <header>
    <!-- <div class="background-img"></div> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Life</RouterLink>
        <router-link :to="{ name: 'blogs', params: { page:'tech' }}">Tech</router-link>
        <form>
        <input v-model="text" placeholder="Search here" />
        <button @click="search">Search</button>
        </form>
      </nav>
  </header>

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
    RouterView,
  },

};
</script>



<style scoped>

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/background-img.jpg");
  background-size: cover;
  opacity: 0.5; /* Adjust the opacity as needed */
}

.wrapper {
  position: relative; /* Add position relative to contain child elements */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Add background color for the navbar */
}

.logo {
  float: left;
}

.nav-links {
  float: right;
}

nav a {
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  color: black; /* Adjust the color of navigation links */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
