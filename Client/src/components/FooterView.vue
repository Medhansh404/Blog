<template>
  <div class="footer-area">
    <div class="container">
      <div class="footer-table">
        <div class="footer-box">
          <h2 class="widget-title">About author</h2>
          <p>A Data Scientist intern who is also free time software developer and loves to make things</p>
        </div>
        <div class="footer-box">
          <h2 class="widget-title">Get in Touch</h2>
          <ul>
            <li>Jaipur Rajasthan</li>
            <li>medh4nsh@gmail.com</li>
            <li>+91 8209516918</li>
          </ul>
        </div>
        <div class="footer-box">
          <h2 class="widget-title">Pages</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
        <div class="footer-box">
          <h2 class="widget-title">Subscribe</h2>
          <p>Subscribe to our mailing list to get the latest updates.</p>
          <form action="">
            <input type="email" placeholder="Email">
            <button type="submit"><i class="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer-area {
  padding: 50px 0; /* Adjust padding for spacing */
}

.footer-table {
  display: flex; /* Use flexbox */
  justify-content: space-between; /* Distribute items evenly */
}

.footer-box {
  flex-basis: 23%; /* Equal width for each box */
}

.widget-title {
  margin-bottom: 20px; /* Adjust spacing below widget titles */
}

.widget-title::after {
  content: "";
  display: block;
  width: 30px;
  height: 2px;
  background-color: #333; /* Adding a simple separator line */
  margin-top: 10px; /* Adjust spacing above the separator line */
}
</style>
