<template>
  <div id="app">
    <section class="hero is-medium">
      <div class="hero-body has-text-centered">
        <div class="container">
          <img class="image" style="margin: 0 auto 1rem auto; max-width: 500px; width: 100%;" src="./assets/wordmark.svg" alt="Logo">
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
                  <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button is-primary">
                </div>
              </div>
            </form>
          </div>
          <!-- END MAILCHIMP -->
        </div>
      </div>
    </section>
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
    name: 'app'
  }
</script>

<style lang="sass">
// VARS
$picton: #48a7f9
$dodger: #1385e8
$yale: #0e589a

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

@import "~bulma"
@import "~buefy/src/scss/buefy"


// STYLES

html
  background-color: $grey50

.footer,
.grey50,
.hero
  background-color: $grey50

</style>
