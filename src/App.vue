<template>
  <div id="app">

    <!-- TOP NAV -->
    <nav class="nav">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item is-brand">
            <img src="./assets/logo.svg" alt="Responsive CTA Builder logo">
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

    <!-- BODY CONTENT -->
    <section class="hero">
      <div class="hero-body">

        <div class="container has-text-centered">
          <h1 class="title is-spaced is-2 dodgerText">Build better calls-to-action</h1>
          <h2 class="subtitle">Responsive CTA Builder helps marketers build responsive calls-to-action which will convert more traffic into visitors than your current bitmap image call-to-action. Give it a try, for free.</h2>
        </div>

        <div class="container">
          <div class="is-cta-container">
            <!-- CTA -->
            <div :style="{ maxWidth: width + 'px' }" style="margin: 0 auto;">
              <cta :sliderVal="width"></cta>
            </div>
            <!-- /CTA -->
            <!-- CTA WIDTH SLIDER -->
            <div class="width-slider">
              <input type="range" v-model="width" min="300" max="1000">
            </div>
            <!-- /CTA WIDTH SLIDER -->
          </div>
        </div>

        <div class="container has-text-centered">
          <a href="https://app.responsivectabuilder.com" class="button is-attention is-danger is-medium">Try Building Your Own</a>
        </div>
      </div>
    </section>

    <!-- SUPPORTING SECTION -->
    <section class="hero is-primary is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h3 class="title">Why should you use a <strong>Responsive CTA</strong> over an Image CTA?</h3>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features">
      <div class="features">
        <!-- ONE -->
        <div class="featureBlock block1">
          <div class="container">
            <div class="columns wow slideInLeft">
              <div class="column">
                <img src="./assets/devices.svg">
              </div>
              <div class="column is-narrow">

              </div>
              <div class="column">
                <p>Responsive CTAs make your call-to-action reader friendly on all devices: computers, tablets and mobile phones.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- TWO -->
        <div class="featureBlock block2">
          <div class="container">
            <div class="columns wow slideInRight">
              <div class="column">
                <p>Responsive CTAs are proven to perform better than image CTAs. We’ve seen <strong>2.5x more clicks</strong> on Responsive CTAs than Image CTAs.</p>
              </div>
              <div class="column is-narrow">

              </div>
              <div class="column">
                <img src="./assets/clicks.svg">
              </div>
            </div>
          </div>
        </div>
        <!-- THREE -->
        <div class="featureBlock block3">
          <div class="container">
            <div class="columns wow slideInLeft">
              <div class="column">
                <img src="./assets/dashboard.svg">
              </div>
              <div class="column is-narrow">

              </div>
              <div class="column">
                <p>You can link your HubSpot CTA tracking with our Responsive CTA Builder. Build beautiful Responsive CTAs but don’t lose any tracking or reporting capabilities.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- FOUR -->
        <div class="featureBlock block4">
          <div class="container">
            <div class="columns wow slideInRight">
              <div class="column">
                <p>Forget trying to fit your long tail keywords into your alt text for an image CTA. With Responsive CTAs just add your keywords into the header, secondary text or button text.</p>
              </div>
              <div class="column is-narrow">

              </div>
              <div class="column">
                <img src="./assets/keyword.svg">
              </div>
            </div>
          </div>
        </div>
        <!-- CTA -->
        <div class="featureBlock block3">
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

    <!-- FOOTER -->
    <www-footer></www-footer>

  </div>
</template>

<script>
  import cta from './components/cta'
  import wwwFooter from './components/footer'

  export default {
    name: 'app',
    data: function () {
      return {
        nav: false,
        width: 1000
      }
    },
    methods: {
      toggleNav () {
        if (this.nav !== true) {
          this.nav = true
        } else {
          this.nav = false
        }
      }
    },
    components: {
      cta,
      'www-footer': wwwFooter
    }
  }
</script>

<style lang="sass">
// VARS

// COMPANY COLORS
$picton: #48a7f9
$dodger: #1385e8
$yale: #0e589a

.picton
  background-color: $picton !important

.dodger
  background-color: $dodger !important

.yale
  background-color: $yale !important

.pictonText
  color: $picton !important

.dodgerText
  color: $dodger !important

.yaleText
  color: $yale !important


// BASE COLORS
$white: #fff
$black: #000
$grey50: #fafafa
$grey100: #f5f5f5
$grey200: #eee
$grey300: #e0e0e0
$grey400: #bdbdbd
$grey500: #9e9e9e
$grey600: #757575
$grey700: #616161
$grey800: #424242
$grey900: #212121

$primary: $dodger

// OVERWRITE BULMA'S DEFAULT GRID WIDTH
$grid: 1136px
$widescreen: $grid
$fullhd: $grid

$text: #6b7c93
$text-light: lighten($text, 8%) // sass-lint:disable-line variable-name-format
$text-strong: darken($text, 8%) // sass-lint:disable-line variable-name-format
$link-hover: darken($text, 24%) // sass-lint:disable-line variable-name-format
$subtitle: $text

$radius: 4px // sass-lint:disable-line variable-name-format

@import "~bulma"
@import "~buefy/src/scss/buefy"

// IMPORT CSS FOR CTA
@import "~cta.css"


// STYLES

.subtitle
  color: $text

.nav
  background-color: transparent

.is-cta-container // sass-lint:disable-line class-name-format
  margin: 64px 0

.features
  .featureBlock
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

.is-attention // sass-lint:disable-line class-name-format
  // sass-lint:disable-block no-color-literals
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)
  transition: box-shadow .2s ease, background-color .2s ease

  &:hover
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

.width-slider // sass-lint:disable-line class-name-format
  margin: 0 auto
  max-width: 1000px

  input
    &[type="range"]
      width: 100%

</style>
