<template>

  <el-row :class="[$style.picF,
                 placement?$style[placement]:'']"
          type="flex"
          style="flex-wrap: wrap"
  >

    <el-col :md="12" :xs="24">
      <div style="overflow: hidden">
        <img v-lazy="data.image" alt="data.title">
      </div>
    </el-col>

    <el-col :md="12" :xs="24">
      <section>
        <div>
          <h2 class="text-capitalize">{{data.title}}</h2>
          <h4 class="hover-underline">{{data.subtitle}}</h4>
          <p>{{data.description}}</p>
          <h5>【查看更多】</h5>
        </div>
      </section>

    </el-col>

  </el-row>
</template>


<style lang="less" module>
  .picF {
    h4 {

      &::after {
        margin-top: 10px;
      }

    }

    section {

      text-align: center;
      display: flex;
      align-items: center;
      padding: 15px;
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
