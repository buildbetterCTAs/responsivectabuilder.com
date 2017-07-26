<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <slot name="title"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'banner'
  }
</script>
