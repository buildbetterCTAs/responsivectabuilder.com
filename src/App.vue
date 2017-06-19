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
          <a class="nav-item is-hidden-mobile">Documentation</a>
          <a class="nav-item is-hidden-mobile">Blog</a>
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
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-spaced is-2 dodgerText">Build better calls-to-action</h1>
          <h2 class="subtitle">Responsive CTA Builder helps marketers build responsive calls-to-action which will convert more traffic into visitors than your current bitmap image call-to-action. Give it a try, for free.</h2>
        </div>
        <div class="container">
          <!-- CTA -->
          <div class="cta" style="border-radius: 4px; background-color: #0E589A;">
            <div class="ctaHeadline" style="color: #ffffff;">This is a powerful, eye-catching headline</div>
            <div class="ctaDescription" style="color: #ffffff;">This is your secondary text that might explain why your reader should follow your call-to-action.</div>
            <a class="ctaButton" target="_blank" style="cursor: initial; background-color: #48A7F9; color: #ffffff;">click here, reader!</a>
          </div>
          <!-- /CTA -->
        </div>
        <div class="container has-text-centered">
          <a href="https://app.responsivectabuilder.com" class="button is-stripe is-primary is-medium">Try Building Your Own</a>
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
    <section id="features" class="hero is-medium">
      <div class="hero-body">

        <div class="container features">
          <!-- ONE -->
          <div class="columns wow slideInLeft">
            <div class="column">
              <img src="./assets/devices.svg">
            </div>
            <div class="column">
              <p>Responsive CTAs make your call-to-action reader friendly on all devices: computers, tablets and mobile phones.</p>
            </div>
          </div>
          <!-- TWO -->
          <div class="columns wow slideInRight">
            <div class="column">
              <p>Responsive CTAs are proven to perform better than image CTAs. We’ve seen <strong>2.5x more clicks</strong> on Responsive CTAs than Image CTAs.</p>
            </div>
            <div class="column">
              <img src="./assets/clicks.svg">
            </div>
          </div>
          <!-- THREE -->
          <div class="columns wow slideInLeft">
            <div class="column">
              <img src="./assets/dashboard.svg">
            </div>
            <div class="column">
              <p>You can link your HubSpot CTA tracking with our Responsive CTA Builder. Build beautiful Responsive CTAs but don’t lose any tracking or reporting capabilities.</p>
            </div>
          </div>
          <!-- FOUR -->
          <div class="columns wow slideInRight">
            <div class="column">
              <p>Forget trying to fit your long tail keywords into your alt text for an image CTA. With Responsive CTAs just add your keywords into the header, secondary text or button text.</p>
            </div>
            <div class="column">
              <img src="./assets/keyword.svg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REQUEST BETA -->
    <section class="hero is-primary is-medium is-bold">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-spaced">Coming Soon</h1>
          <h2 class="subtitle">Request Beta Access</h2>
          <!-- BEGIN MAILCHIMP -->
          <div id="mc_embed_signup">
            <form action="//responsivectabuilder.us15.list-manage.com/subscribe/post?u=5dc16787f107b34340beed700&amp;id=034a6081d2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll" class="field has-addons has-addons-centered">
                <div class="mc-field-group control">
                  <input type="email" placeholder="Email" value="" name="EMAIL" class="input required email" id="mce-EMAIL">
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="text" name="b_5dc16787f107b34340beed700_034a6081d2" tabindex="-1" value="">
                </div>
                <div class="clear control">
                  <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
              </div>
            </form>
          </div>
          <!-- END MAILCHIMP -->
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>Made with ❤️ by <a href="https://www.reiner.io">Jeff Reiner</a> and <a href="https://twitter.com/_danieljmurphy">Daniel Murphy</a>.</p>
          <p><small>© 2017 Daniel J. Murphy and Jeff Reiner</small></p>
          <div class="nav-center">
            <a class="nav-item" href="https://github.com/buildBetterCTAs/" target="_blank">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
            <a class="nav-item" href="https://twitter.com/buildBetterCTAs" target="_blank">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        nav: false
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
$grey300: #e0e0e0
$grey400: #bdbdbd
$grey500: #9e9e9e

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

.hero-body // sass-lint:disable-line class-name-format
  .container
    &:not(:first-child)
      margin-top: 64px

.nav
  background-color: transparent

.features
  .columns
    align-items: center


.is-stripe // sass-lint:disable-line class-name-format
  // sass-lint:disable-block no-color-literals
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11),  0 1px 3px rgba(0, 0, 0, .08)

  &:hover
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1),  0 3px 6px rgba(0, 0, 0, .08)

.columns
  &:not(:last-child)
    margin-bottom: 48px

footer
  a
    font-weight: 500

html
  background-color: $white

.white
  background-color: $white !important

.footer,
.grey50
  background-color: $grey50

</style>
