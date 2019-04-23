
<script>
  import baseButton from '../components/baseButton'

  export default {
    extends: baseButton,

    data() {
      return {
        msg: '按鈕'
      }
    }


  }


</script>

<style scoped>
  button{
    width: 100px;
    height: 30px;
    background: transparent;
    border: 1px solid #222;
  }
</style>
