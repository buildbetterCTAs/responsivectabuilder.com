<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <a href="/" class="nav-item is-brand">
          <img src="./../assets/logo.svg" alt="Responsive CTA Builder">
        </a>
      </div>
      <div class="nav-right">
        <a href="#features" class="nav-item is-hidden-mobile">Features</a>
        <a class="nav-item is-hidden-mobile" href="https://docs.responsivectabuilder.com" target="_blank">Documentation</a>
        <a class="nav-item is-hidden-mobile" href="https://blog.responsivectabuilder.com" target="_blank">Blog</a>
        <div class="nav-item is-hidden-mobile">
          <div class="field is-grouped">
            <p class="control">
              <a href="https://app.responsivectabuilder.com" class="button is-primary">Login</a>
            </p>
          </div>
        </div>
      </div>
      <span class="nav-toggle" @click="toggleNav()" :class="{ 'is-active': nav }">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu is-hidden-tablet" :class="{ 'is-active': nav }">
        <a href="/" class="nav-item">Home</a>
        <a href="#features" class="nav-item">Features</a>
        <a class="nav-item">Documentation</a>
        <a class="nav-item">Blog</a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'www-header',
    data: function () {
      return {
        nav: false
      }
    }
  }
</script>
