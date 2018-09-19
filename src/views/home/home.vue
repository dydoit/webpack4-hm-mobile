<template>
  <div class="home">
    <Header></Header>
    <Nav></Nav>
    <div class="main">
       <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import Nav from '@/components/layout/nav.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>
<style lang="stylus" scoped>
  .home
    display flex
    flex-direction column
    height 100vh
    overflow hidden
    .main
      flex 1
      overflow hidden
</style>


