<template>

  <div :class="[$style.picF,
                 placement?$style[placement]:'']">

    <header>
      <img v-lazy="data.image" alt="data.title">
    </header>

    <footer>
      <section>
        <div>
          <h3 class="text-capitalize">{{data.title}}</h3>
          <h4 class="hover-underline">{{data.subtitle}}</h4>
          <p>{{data.description}}</p>
          <h5>【查看更多】</h5>
        </div>
      </section>

      <img v-lazy="data.image" alt="data.title">

    </footer>


  </div>
</template>



<style lang="less" module>
  .picF {

    display: flex;
    flex-direction: column;
    &.top {
      flex-direction: column-reverse;
      @media (max-width: @breakpoint-xsmall-max) {
        flex-direction: column;
      }
    }
  ;
    header {
      overflow: hidden
    }
  ;
    footer {
      position: relative;
      overflow: hidden;

    }
  ;
    section {

      background: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 2rem;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      h3 {
        font-weight: bold;
      }
      h4 {
        padding-bottom: 10px;
        &::after {
          width: 100%;
          transform: scale(0.2, 1);
        }
      }
      h5 {
        margin-top: 30px;
      }

    }
    &:hover {
      img {
        transform: scale(1.2);
      }
      h4 {

        &::after {
          width: 100%;
          transform: scale(0.5, 0.5)
        }

      }
    }
  }


</style>
