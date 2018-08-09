<template>
  <div id="home">
    <Header></Header>
    <Nav></Nav>
    <Banner :bannerList = 'bannerList' ></Banner>
    <PanelNav></PanelNav>
    <RecommendedModel :recommendedCarList="recommendedCarList"></RecommendedModel>
    <FinancialActivity :financialList='financialList'></FinancialActivity>
    <BannerOther :list="bannerOthers"></BannerOther>
    <Activity :actList="actList"></Activity>
    <Product></Product>
  </div>
</template>
<script>
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import Nav from '@/components/layout/nav.vue'
import Banner from './components/banner'
import PanelNav from './components/panelNav.vue'
import RecommendedModel from './components/recommendedModel'
import FinancialActivity from './components/financialActivity.vue'
import BannerOther from './components/bannerOther.vue'
import Activity from './components/activity.vue'
import Product from './components/product.vue'

import * as api from '@/api'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      bannerList: [],
      prevBannerList: [],
      recommendedCarList: [],
      financialList: [],
      bannerOthers: [],
      actList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    Header,
    Nav,
    Banner,
    PanelNav,
    RecommendedModel,
    FinancialActivity,
    BannerOther,
    Activity,
    Product,
    Footer
  },
  methods: {
    ...mapActions(['getLocation']),
    getBanner (type) {
      return api.getBannerList({
        locationCode: type
      })
    },
    getRecommendedCarList () {
      api.getRecommendedCarList().then(res => {
        if (res.code === 'success') {
          let { carSeriesList } = res.data
          this.recommendedCarList = carSeriesList.slice(0, 4)
        }
      })
    },
    getFinanialList () {
      api.getFinanicalList({
        recId: 'financial'
      }).then(res => {
        if (res.code === 'success') {
          let {data} = res
          this.financialList = data.fPlanList
        }
      })
    },
    getActivityList (page, pageSize, cityId) {
      api.getActivityList(page, pageSize, {
        cityId
      }).then(res => {
        console.log(res)
        if (res.code === 'success') {
          let {data} = res
          this.actList = data.actList
        }
      })
    },
    getProduct () {
      api.getProduct({recId: 'product'}).then(res => {
        console.log(res)
      })
    }
  },

  created () {
    this.getLocation()
    this.getBanner('INDEX_TOP').then(res => {
      if (res.code === 'success') {
        let {data} = res
        this.prevBannerList = this.bannerList = data.bannerList
      }
    })
    this.getRecommendedCarList()
    this.getFinanialList()
    this.getBanner('INDEX_MIDDLE').then(res => {
      if (res.code === 'success') {
        let {data} = res
        console.log(data)
        this.bannerOthers = data.bannerList
      }
    })
    this.getProduct()
  },
  watch: {
    city (newVal) {
      this.getActivityList(1, 4, newVal.id)
    }
  },
  activated () {
    this.bannerList = []
    setTimeout(() => {
      this.bannerList = this.prevBannerList
    }, 200)
  }
}
</script>
<style lang="stylus" scoped>

</style>


