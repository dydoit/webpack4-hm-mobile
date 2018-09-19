<template>
  <scroll ref="scroll" class="index">
    <div>
      <banner :bannerList = 'bannerList' ></banner>
      <panel-nav></panel-nav>
      <div class="bg-white">
        <panel-title :title="titles[0].name"></panel-title>
        <recommended-car-list :recommendedCarList="recommendedCarList"></recommended-car-list>
      </div>
      
      <div class="bg-black">
        <panel-title :title="titles[1].name" :is-has-class="true"></panel-title>
        <financial-list :financial-list='financialList'></financial-list>
      </div>
      <banner-other :list="bannerOthers"></banner-other>
      <div class="bg-black">
        <panel-title :title="titles[2].name" :is-has-class="true"></panel-title>
        <activity-list :actList="actList"></activity-list>
      </div>
      <div class="bg-black mt10">
        <panel-title :title="titles[3].name" :is-has-class="true"></panel-title>
        <product :product-list = "productList"></product>
      </div>
      <div class="bg-black mt10">
        <panel-title :title="titles[4].name" :is-has-class="true"></panel-title>
      </div>
      
    </div>
    
  </scroll>
</template>
<script>
import Scroll from '@/components/scroll/scroll.vue'
import Banner from './components/banner'
import PanelNav from './components/panelNav.vue'
import PanelTitle from './components/panelTitle.vue'
import RecommendedCarList from './components/recommendedCarList'
import FinancialList from './components/financialList.vue'
import BannerOther from './components/bannerOther.vue'
import ActivityList from './components/activityList.vue'
import Product from './components/product.vue'
import * as api from '@/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      titles: [
        {name: '推荐车型', path: '/carList'},
        {name: '金融活动', path: '/carList'},
        {name: '热门活动', path: '/carList'},
        {name: '纯正配件', path: '/carList'},
        {name: '优秀经销商', path: '/carList'}
      ],
      bannerList: [],
      prevBannerList: [],
      recommendedCarList: [],
      financialList: [],
      bannerOthers: [],
      actList: [],
      productList: []
    }
  },
  computed: {
    ...mapGetters(['city'])
  },
  components: {
    Scroll,
    Banner,
    PanelNav,
    PanelTitle,
    RecommendedCarList,
    FinancialList,
    BannerOther,
    ActivityList,
    Product
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
        if (res.code === 'success') {
          this.$refs.scroll.refresh()
          let {data} = res
          this.actList = data.actList
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getProduct () {
      api.getProduct({recId: 'product'}).then(res => {
        if (res.success) {
          let { data } = res
          this.productList = data.productList
          console.log(this.productList)
        }
      })
    },
    getGoodDealers () {
      let _this = this
      api.getGoodDealers({
        page: 1,
        pageSize: 2,
        city: _this.city.id
      }).then(res => {
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
        this.bannerOthers = data.bannerList
      }
    })
    this.getProduct()
    this.getGoodDealers()
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
  .index
    height 100%
    overflow hidden
    background-color #3C3C3C
  .bg-black
    background-color #444
  .bg-white
    background-color #fff
</style>


