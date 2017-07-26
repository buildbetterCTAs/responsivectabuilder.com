<template>
  <div class="container">
    <div class="has-text-centered">
      <img src="./../../assets/wordmark.svg" alt="Responsive CTA Builder">
      <div class="nav-center links">
        <a href="#contact" class="nav-item">Contact</a>
        <router-link to="docs" class="nav-item">Documentation</router-link>
        <router-link to="blog" class="nav-item">Blog</router-link>
        <a href="#story" class="nav-item">Story</a>
      </div>
      <p class="copyright"><small>© 2017 Daniel J. Murphy and Jeff Reiner</small></p>
      <div class="nav-center">
        <a class="nav-item" href="https://twitter.com/buildBetterCTAs" target="_blank"><b-icon pack="fa" icon="twitter"></b-icon></a>
        <a class="nav-item" href="https://www.facebook.com/BuildBetterCTAs" target="_blank"><b-icon pack="fa" icon="facebook"></b-icon></a>
        <a class="nav-item" href="#linkedin" target="_blank"><b-icon pack="fa" icon="linkedin"></b-icon></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'www-footer'
  }
</script>
