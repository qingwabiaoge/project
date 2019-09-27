<template>
  <div :class="$style['produce']">
    <el-row>
      <el-col :md="12">
        <el-carousel-responsive :data="data.images"></el-carousel-responsive>
      </el-col>
      <el-col :md="11" :offset="1">
        <h1>
          {{data.title}}
        </h1>
        <h3>
          weight:{{data.weight}}
        </h3>
        <h3>
          color:{{data.color}}
        </h3>
        <p>
          {{data.description}}
        </p>

      </el-col>
    </el-row>

    <article v-html="data.content">
    </article>
  </div>
</template>

<script>
  export default {}
</script>

<style module lang="less">
  .produce {
    text-transform: uppercase;
    background: #fff;
    padding: 50px 20px;

    h1 {
      padding: 26px 0 17px 10px;
      border-bottom: 1px solid #999;
      font-size: 2.5rem;
    }

    h3 {
      padding-left: 10px;
      font-size: 2.2rem;
    }

    p {
      padding-top: 50px;
      line-height: 2;
    }

    article {
      margin-top: 50px;
      padding-top: 50px;
      padding-bottom: 50px;
      border-top: 1px solid #999;
    }

  }

</style>
