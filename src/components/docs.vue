<template>
  <div>
    <!-- HEADER -->
    <header>
      <app-header></app-header>
    </header>
    <!-- MAIN -->
    <main>
      <banner>
        <p slot="title" class="title">Documentation</p>
      </banner>
      <div class="container">
        <section class="hero is-medium">
          <div class="hero-body has-text-centered">
            <h1 class="title is-spaced is-2 dodgerText">Help ya self!</h1>
            <p class="subtitle">Some docs for stuff you might need to know!</p>
          </div>
        </section>
        <div class="columns">
          <div class="column">
            <div class="box helpBox">
              <h1 class="title is-5">Working with HubSpot</h1>
              <p>Help doc description here.</p>
              <a href="">Learn</a>
            </div>
          </div>
          <div class="column">
            <div class="box helpBox">
              <h1 class="title is-5">Working with HubSpot</h1>
              <p>Help doc description here.</p>
              <a href="">Learn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import appHeader from './partials/header'
  import banner from './partials/banner'

  export default {
    name: 'docs',
    meta: {
      title: 'Documentation'
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
