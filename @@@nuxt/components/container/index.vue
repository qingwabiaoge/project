<template>
  <div :class="$style.container">

    <slot>

    </slot>
  </div>
</template>

<style module lang="less">

  .container {
    /* media>1200 */
    @media screen and (min-width: @global-breakpoint-desktop) {

      width: @global-breakpoint-desktop;
      margin: 0 auto;
    }
    /* 720< media <1200 */
    @media (min-width: @global-breakpoint-phone)and (max-width: @global-breakpoint-tablet-max) {
      width: @global-breakpoint-tablet;
      margin: 0 auto;
    }

    /*media<720*/
    @media (max-width: @breakpoint-xsmall-max) {

      width: 100%
    }
  }

</style>
