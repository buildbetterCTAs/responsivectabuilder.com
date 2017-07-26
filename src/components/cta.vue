<template>
  <div>
    <div class="cta-with-slider" :style="{ maxWidth: width + 'px' }">
      <div :class="responsiveClass">
        <div class="cta" style="border-radius: 4px; background-color: #0E589A;">
          <div class="ctaHeadline" style="color: #fff;">This is a powerful, eye-catching headline</div>
          <div class="ctaDescription" style="color: #fff;">This is your secondary text that might explain why your reader should follow your call-to-action.</div>
          <a class="ctaButton" target="_blank" style="cursor: initial; background-color: #48A7F9; color: #fff;">click here, reader!</a>
        </div>
      </div>
    </div>
    <!-- SLIDER -->
    <div class="width-slider">
      <slider v-model="width" min="300" max="1000"></slider>
    </div>
  </div>
</template>

<script>
  import slider from 'vue-range-slider'

  export default {
    name: 'cta',
    data: function () {
      return {
        width: 1000,
        displayElementWidth: 0
      }
    },
    computed: {
      responsiveClass: function () {
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
        this.displayElementWidth = document.getElementsByClassName('cta-with-slider')[0].clientWidth
      }
    },
    mounted: function () {
      this.calcWidth()
      window.addEventListener('resize', () => {
        this.calcWidth()
      })
    },
    watch: {
      width: function () {
        this.calcWidth()
      }
    },
    components: {
      slider
    }
  }
</script>

<style lang="sass">

@import "./../assets/style/color"

//******************
// UTILITY WRAPPERS
//******************

.cta-with-slider
  margin: 0 auto

.width-slider
  margin: 0 auto
  max-width: 1000px

  @media only screen and (max-width: 1024px)
    display: none

//******************
// VUE-RANGE-SLIDER
//******************

$slider-height: 48px
$slider-width: 100%
$rail-height: 12px
$knob-size: 28px
$rail-color: #e2e2e2
$rail-fill-color: $primary
$knob-color: #fff
$knob-border: 4px solid $primary
$knob-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)
$knob-shadow-hover: 0 7px 14px rgba(50, 50, 93, .1),  0 3px 6px rgba(0, 0, 0, .08)

.range-slider-knob
  transition: box-shadow .2s ease

  &:hover
    box-shadow: $knob-shadow-hover

@import "~vue-range-slider/dist/vue-range-slider.scss"

//******************
// CTA EMBED STYLES
//******************

@import "~cta.css"


.cta
  transition: padding .2s ease, font-size .2s ease

//******************
// JS MEDIA QUERIES
//******************

// sass-lint:disable class-name-format
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
// sass-lint:enable class-name-format

</style>
