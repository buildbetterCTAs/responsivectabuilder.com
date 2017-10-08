<template>
  <div>
    <!-- ROUTED PAGES -->
    <router-view></router-view>
    <!-- FOOTER -->
    <footer class="footer">
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
  import appFooter from './components/partials/footer'

  export default {
    name: 'home',
    meta: {
      title: 'Responsive CTA Builder',
      titleTemplate: '%s | Responsive CTA Builder'
    },
    components: {
      'app-footer': appFooter
    }
  }
</script>

<style lang="sass">

@import "assets/style/color"

//***********
// VARIABLES
//***********

// OVERWRITE BULMA'S DEFAULT GRID WIDTH
$grid: 1136px
$widescreen: $grid
$fullhd: $grid

// $text: #6b7c93
// $text-light: lighten($text, 8%)
// $text-strong: darken($text, 8%)
// $link-hover: darken($text, 24%)
// $subtitle-color: $text

@import "~bulma"
@import "~buefy/src/scss/buefy"

//*********
// UTILITY
//*********

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

.white
  background-color: $white !important

//*********
// APP.VUE
//*********

.title
  strong
    color: $text-strong

.subtitle
  color: $text

.nav
  background-color: transparent

.features
  .feature-block
    padding: 80px 0

    .container
      @media screen and (max-width: 1000px)
        margin-left: 20px
        margin-right: 20px


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

.footer
  background-color: $white
  padding: 5rem 0

  .container
    @media screen and (max-width: 1000px)
      margin-left: 20px
      margin-right: 20px


  .links
    margin-top: 24px

  .copyright
    margin-bottom: 32px
    margin-top: 16px

</style>
