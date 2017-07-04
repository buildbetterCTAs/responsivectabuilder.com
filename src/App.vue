<template>
  <div id="app">
    <!-- HEADER -->
    <header>
      <!-- INTRO SECTION -->
      <section class="hero is-fullheight">
        <div class="hero-head">
          <www-header></www-header>
        </div>
        <div class="hero-body">
          <div class="container">
            <!-- HEADLINE -->
            <div class="has-text-centered">
              <h1 class="title is-spaced is-2 dodger-text">Build better calls-to-action</h1>
              <h2 class="subtitle">Responsive CTA Builder helps marketers build responsive calls-to-action which will convert more traffic into visitors than your current bitmap image call-to-action. Give it a try, for free.</h2>
            </div>
            <!-- CTA -->
            <div class="cta-with-slider" :style="{ maxWidth: width + 'px' }">
              <cta :sliderVal="width"></cta>
            </div>
            <!-- WIDTH SLIDER -->
            <div class="width-slider">
              <input type="range" v-model="width" min="300" max="1000">
            </div>
          </div>
        </div>
        <div class="hero-footer has-text-centered">
          <div style="margin-bottom: 64px;">
            <a href="https://app.responsivectabuilder.com" class="button is-danger is-medium">Try Building Your Own</a>
          </div>
        </div>
      </section>
    </header>
    <!-- MAIN -->
    <main>
      <!-- SUPPORTING SECTION -->
      <section class="hero is-primary is-medium is-bold">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h3 class="title">Why should you use a <strong>Responsive CTA</strong> over an Image CTA?</h3>
          </div>
        </div>
      </section>
      <!-- FEATURES SECTION -->
      <section id="features">
        <div class="features">
          <!-- ONE -->
          <div class="feature-block block1">
            <div class="container">
              <div class="columns wow slideInLeft">
                <div class="column">
                  <img src="./assets/devices.svg">
                </div>
                <div class="column is-narrow"></div>
                <div class="column">
                  <p>Responsive CTAs make your call-to-action reader friendly on all devices: computers, tablets and mobile phones.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- TWO -->
          <div class="feature-block block2">
            <div class="container">
              <div class="columns wow slideInRight">
                <div class="column">
                  <p>Responsive CTAs are proven to perform better than image CTAs. We’ve seen <strong>2.5x more clicks</strong> on Responsive CTAs than Image CTAs.</p>
                </div>
                <div class="column is-narrow"></div>
                <div class="column">
                  <img src="./assets/clicks.svg">
                </div>
              </div>
            </div>
          </div>
          <!-- THREE -->
          <div class="feature-block block3">
            <div class="container">
              <div class="columns wow slideInLeft">
                <div class="column">
                  <img src="./assets/dashboard.svg">
                </div>
                <div class="column is-narrow"></div>
                <div class="column">
                  <p>You can link your HubSpot CTA tracking with our Responsive CTA Builder. Build beautiful Responsive CTAs but don’t lose any tracking or reporting capabilities.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- FOUR -->
          <div class="feature-block block4">
            <div class="container">
              <div class="columns wow slideInRight">
                <div class="column">
                  <p>Forget trying to fit your long tail keywords into your alt text for an image CTA. With Responsive CTAs just add your keywords into the header, secondary text or button text.</p>
                </div>
                <div class="column is-narrow"></div>
                <div class="column">
                  <img src="./assets/keyword.svg">
                </div>
              </div>
            </div>
          </div>
          <!-- CTA -->
          <div class="feature-block block3">
            <div class="container">
              <!-- CTA -->
              <div class="cta" style="border-radius: 4px; background-color: #0E589A;">
                <div class="ctaHeadline" style="color: #ffffff;">This is a powerful, eye-catching headline</div>
                <div class="ctaDescription" style="color: #ffffff;">This is your secondary text that might explain why your reader should follow your call-to-action.</div>
                <a class="ctaButton" target="_blank" style="cursor: initial; background-color: #48A7F9; color: #ffffff;">click here, reader!</a>
              </div>
              <!-- /CTA -->
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- FOOTER -->
    <footer class="footer">
      <www-footer></www-footer>
    </footer>
  </div>
</template>

<script>
  import cta from './components/cta'
  import wwwFooter from './components/footer'
  import wwwHeader from './components/header'

  export default {
    name: 'app',
    data: function () {
      return {
        width: 1000
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
    },
    components: {
      cta,
      'www-footer': wwwFooter,
      'www-header': wwwHeader
    }
  }
</script>

<style lang="sass">
// VARS

// COMPANY COLORS
$picton: #48a7f9
$palette-dodger: rgb(227, 240, 252) rgb(184, 218, 248) rgb(137, 194, 244) rgb(90, 170, 239) rgb(54, 151, 235) rgb(19, 133, 232) rgb(17, 125, 229) rgb(14, 114, 226) rgb(11, 104, 222) rgb(6, 85, 216)
$dodger-50: nth($palette-dodger, 1)
$dodger-100: nth($palette-dodger, 2)
$dodger-200: nth($palette-dodger, 3)
$dodger-300: nth($palette-dodger, 4)
$dodger-400: nth($palette-dodger, 5)
$dodger: nth($palette-dodger, 6)
$dodger-600: nth($palette-dodger, 7)
$dodger-700: nth($palette-dodger, 8)
$dodger-800: nth($palette-dodger, 9)
$dodger-900: nth($palette-dodger, 10)
$yale: #0e589a




.picton
  background-color: $picton !important

.dodger
  background-color: $dodger !important

.yale
  background-color: $yale !important

.picton-text
  color: $picton !important

.dodger-text
  color: $dodger !important

.yale-text
  color: $yale !important


// BASE COLORS
$white: #fff
$black: #000
$grey-50: #fafafa
$grey-100: #f5f5f5
$grey-200: #eee
$grey-300: #e0e0e0
$grey-400: #bdbdbd
$grey-500: #9e9e9e
$grey-600: #757575
$grey-700: #616161
$grey-800: #424242
$grey-900: #212121

$red-a400: #ff1744

$primary: $dodger
$danger: $red-a400

// OVERWRITE BULMA'S DEFAULT GRID WIDTH
$grid: 1136px
$widescreen: $grid
$fullhd: $grid

$text: #6b7c93
$text-light: lighten($text, 8%)
$text-strong: darken($text, 8%)
$link-hover: darken($text, 24%)
$subtitle: $text

// $radius: 4px

@import "~bulma"
@import "~buefy/src/scss/buefy"

// IMPORT CSS FOR CTA
@import "~cta.css"


// STYLES

.subtitle
  color: $text

.nav
  background-color: transparent

.features
  .feature-block
    padding: 80px 0

    &.block1
      background-color: darken($white, 0%)

    &.block2
      background-color: darken($white, 2.5%)

    &.block3
      background-color: darken($white, 5%)

    &.block4
      background-color: darken($white, 7.5%)

  .columns
    align-items: center

.button
  &.is-attention
    // sass-lint:disable-block no-color-literals
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)
    transition: box-shadow .2s ease, background-color .2s ease

    &:hover,
    &:focus,
    &:active
      box-shadow: 0 7px 14px rgba(50, 50, 93, .1),  0 3px 6px rgba(0, 0, 0, .08)

.columns
  &:not(:last-child)
    margin-bottom: 48px

html
  background-color: $white

.white
  background-color: $white !important

.footer
  background-color: $white
  padding: 5rem

  .links
    margin-top: 24px

  .copyright
    margin-bottom: 32px
    margin-top: 16px

.cta-with-slider
  margin: 0 auto

.width-slider
  margin: 0 auto
  max-width: 1000px

  @media only screen and (max-width: 1024px)
    display: none


  input
    &[type="range"]
      width: 100%

</style>
