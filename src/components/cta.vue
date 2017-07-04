<template>
  <div :class="responsiveClass">
    <div class="cta" style="border-radius: 4px; background-color: #0E589A;">
      <div class="ctaHeadline" style="color: #fff;">This is a powerful, eye-catching headline</div>
      <div class="ctaDescription" style="color: #fff;">This is your secondary text that might explain why your reader should follow your call-to-action.</div>
      <a class="ctaButton" target="_blank" style="cursor: initial; background-color: #48A7F9; color: #fff;">click here, reader!</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cta',
    data: function () {
      return {
        displayElementWidth: 0
      }
    },
    props: {
      sliderVal: [String, Number]
    },
    computed: {
      responsiveClass () {
        const mediumLargeScreen = 800
        const mediumScreen = 768
        const smallScreen = 600
        const smallerScreen = 425
        const tinyScreen = 320

        const width = this.displayElementWidth

        if (width > mediumLargeScreen) {
          return ''
        } else if (width > mediumScreen) {
          return 'mediumLarge'
        } else if (width > smallScreen) {
          return 'medium'
        } else if (width > smallerScreen) {
          return 'small'
        } else if (width > tinyScreen) {
          return 'smaller'
        } else {
          return 'tiny'
        }
      }
    },
    methods: {
      calcWidth: function () {
        this.displayElementWidth = this.$el.clientWidth
      }
    },
    mounted () {
      this.calcWidth()
      window.addEventListener('resize', () => {
        this.calcWidth()
      })
    },
    watch: {
      sliderVal: function () {
        this.calcWidth()
      }
    }
  }
</script>

<style lang="sass" scoped>
//******************
// CTA EMBED STYLES
//******************

@import "~cta.css"

//******************
// JS MEDIA QUERIES
//******************

// Medium-Large & Down
.mediumLarge,
.medium,
.small,
.smaller,
.tiny
  .ctaImage
    display: none

// Medium & Down
.medium,
.small,
.smaller,
.tiny
  .cta
    padding: 40px

  .ctaHeadline
    font-size: 36px

  .ctaButton
    height: 54px
    line-height: 54px
    margin-top: 8px

// Small & Down
.small,
.smaller,
.tiny
  .cta
    padding: 32px

  .ctaHeadline
    font-size: 30px

  .ctaButton
    height: auto
    line-height: 2
    padding: 8px
    text-align: center
    width: 100%

// Smaller & Down
.smaller,
.tiny
  .cta
    padding: 24px

  .ctaHeadline
    font-size: 28px

  .ctaDescription
    font-size: 18px

// Tiny & Down
.tiny
  .cta
    padding: 16px

  .ctaHeadline
    font-size: 24px

</style>
