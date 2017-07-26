<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item is-brand">
          <img src="./../../assets/logo.svg" alt="Responsive CTA Builder">
        </router-link>
      </div>
      <div class="nav-right">
        <router-link to="/#features" class="nav-item is-hidden-mobile">Features</router-link>
        <router-link to="docs" class="nav-item is-hidden-mobile">Documentation</router-link>
        <router-link to="blog" class="nav-item is-hidden-mobile">Blog</router-link>
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
        <router-link to="/" class="nav-item">Home</router-link>
        <a href="/#features" class="nav-item">Features</a>
        <router-link to="docs" class="nav-item">Documentation</router-link>
        <router-link to="blog" class="nav-item">Blog</router-link>
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
    },
    methods: {
      toggleNav: function () {
        if (this.nav !== true) {
          this.nav = true
        } else {
          this.nav = false
        }
      }
    }
  }
</script>
