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
