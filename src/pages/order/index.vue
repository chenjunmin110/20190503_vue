<template>
  <div class='order_wrap' id="order_wrap">
    <div class="box"
         v-tap="(e)=>vueTouch('点击',e)"
         v-longtap="(e)=>vueTouch('长按',e)"
         v-swipeleft="(e)=>vueTouch('左滑',e)"
         v-swiperight="(e)=>vueTouch('右滑',e)"
         v-swipeup="(e)=>vueTouch('上滑',e)"
         v-swipedown="(e)=>vueTouch('下滑',e)"
    >
      order{{mag}} {{$store.state.home.mag}}
      <button @click="addShopCar">加入购物车</button>
      <button @click="goShop">进入购物车</button>
      <button @click="goShop222">进入购物车</button>
      <el-switch
        v-model="value"
        active-color="#000000"
        inactive-color="#ff4949">
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      message: 2222,
      value: true,
      name: 'touch'
    }
  },
  methods: {
    vueTouch: function (txt, e) {
      this.name = txt
    },
    addShopCar () {
      let ordermag = this.ordermag
      ordermag = ordermag + 1
      // this.$store.commit('ORDERMAG', ordermag)
      this.$store.dispatch('ordermag', ordermag)
      console.log(this.$store.state.order.ordermag, 555555555)
    },
    goShop () {
      this.$router.push({name: 'shop', params: {id: 'id'}})
    },
    goShop222 () {
      this.$router.replace({path: '/shop', query: {id: 111}})
    }
  },
  computed: {
    mag () {
      return this.$store.state.home.mag
    },
    weekDate () {
      return this.$store.state.home.dateLength
    },
    ordermag () {
      return this.$store.state.order.ordermag
    }
  },
  beforeCreate () {
    console.group('beforeCreate 创建前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  created () {
    console.log(this.$store.state.home.mag, this.mag)
    console.group('created 创建完毕状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
    console.log(this.$route)
  },
  beforeMount () {
    console.group('beforeMount 挂载前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + (this.$el))
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
    console.log(this.$route)
    let wa = document.getElementsByClassName('order_wrap')
    console.log(wa, 2222222222222222)
  },
  mounted () {
    console.group('mounted 挂载结束状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
    let wa = document.getElementsByClassName('order_wrap')[0]
    console.log(wa, 222222222222222)
  },
  beforeUpdate () {
    console.group('beforeUpdate 更新前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  updated () {
    console.group('updated 更新完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  beforeDestroy () {
    console.group('beforeDestroy 销毁前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  destroyed () {
    console.group('destroyed 销毁完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + JSON.stringify(this.$data))
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  }
}
</script>

<style scoped lang='scss'>
  .order_wrap {
    background: #000;
  }
</style>
