<template>
  <div>
    <!-- HEADER -->
    <header>
      <app-header></app-header>
    </header>
    <!-- MAIN -->
    <main>
      <banner>
        <p slot="title" class="title">Blog</p>
      </banner>
      <div class="container">
        <section class="hero">
          <div class="hero-body has-text-centered">
            <h1 class="title is-spaced is-2 dodgerText">Tips & Tricks</h1>
          </div>
        </section>
        <div class="columns">
          <div class="column is-half">
            <div class="box helpBox">
              <h1 class="title is-5 is-spaced">Introduction to Responsive CTA Builder</h1>
              <p class="subtitle is-6">Introduction Meta</p>
              <router-link to="/blog/introduction">Read</router-link>
            </div>
          </div>
          <!-- <div class="column">
            <div class="box helpBox">
              <h1 class="title is-5 is-spaced">Blog Post</h1>
              <p class="subtitle is-6">Blog Post Meta</p>
              <router-link to="working-with-hubspot">Read</router-link>
            </div>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import appHeader from './partials/header'
  import banner from './partials/banner'

  export default {
    name: 'blog',
    meta: {
      title: 'Blog'
    },
    data: function () {
      return {}
    },
    components: {
      'app-header': appHeader,
      banner
    }
  }
</script>
