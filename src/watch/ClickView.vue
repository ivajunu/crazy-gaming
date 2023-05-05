<script>
  export default {
    data() {
      return {
        allgames: '',
        xbox: '',
        playstation: '',
        nintendo: '',
        pc: ''
      }
    },
    watch: {
      $route() {
        if (
          this.$route.fullPath === '/all-products' ||
          this.$route.fullPath.startsWith('/products/')
        ) {
          console.log(this.$route.fullPath)
          console.log('Du har klickat')
        }
      }
    }
  }
</script>
