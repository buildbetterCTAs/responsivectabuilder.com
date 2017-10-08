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
        <section style="margin-top: 40px;">
          <!-- HEY DAN STUFF GOES IN THIS DIV! -->
          <div class="content">
            <h1>Introduction</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
  import appHeader from './../partials/header'
  import banner from './../partials/banner'

  export default {
    name: 'introduction',
    meta: {
      title: 'Introduction to Responsive CTA Builder'
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
