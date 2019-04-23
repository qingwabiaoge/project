<template>

  <div class="talk">
    <div class="talk-header"></div>
    <div class="talk-content">

      <div style="height: 800px"></div>

    </div>
    <form>

      <input type="text"/>
      <button>发送</button>
    </form>

  </div>
</template>


<style lang="less">
  .talk {
    & {
      width: 520px;
    }

    .talk-header {
      height: 50px;
      background: #E6C992;
    }

    .talk-content {
      height: 300px;
      border-left: 2px solid #E6C992;
      border-right: 2px solid #E6C992;
      overflow: auto;
    }

    form {
      border: 2px solid #E6C992;
      position: relative
    }

    input {
      border: 0;
      height: 100px;
      width: 250px;
    }

    input:focus {
      border: 0
    }

    button {
      position: absolute;
      right: 0;
    }

  }


</style>
