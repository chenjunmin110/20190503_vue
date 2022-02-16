<template>
  <div class="home_wrap">
    {{mag}}222
    {{mags}}
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <div>
      <div :key="index" v-for="(i, index) in seller.conten" @click="change(index)" :class="{'acitve': i.show}">
      <span>名字：{{i.name}}</span>
      <span>年龄：{{i.age}}</span>
    </div>
    </div>
    <div @click="goSk1" :class="[aa, 'abc']">gosk1</div>
    <div @click="goSk2" :class="{'class1': classShow}">gosk2</div>
    <router-view/>
  </div>
</template>

<script>
import bus from '../../../static/bus.js'
// import {mapState} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg: '2222',
      aa: 'box',
      classShow: false,
      seller: {}
    }
  },
  created () {
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('MSG', this.mags)
    console.log(this.$store.state.home.mag, 555555555555555)
    next()
  },
  computed: {
    mag () {
      return this.$store.state.home.mag
    },
    mags () {
      return this.mag + 1
    }
    // ...mapState({
    //   mags: state => state.home.mag
    // })
  },
  mounted () {
    bus.$on('eventName', (value) => {
      console.log(value, 66666666)
    })
    console.log(this.$http, 'this.$http')
    this.getData()
    // this.$http.get('../../../static/data.json')
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  },
  methods: {
    change (index) {
      this.seller.conten.forEach((i, newIndex) => {
        if (newIndex === index) {
          this.seller.conten[newIndex].show = true
        } else {
          this.seller.conten[newIndex].show = false
        }
      })
    },
    goSk1 () {
      console.log(this.$router, this.mag)
      this.$router.push({path: '/home/sk1', query: {id: 'abc'}})
    },
    goSk2 () {
      this.$router.push({name: 'sk2', params: {id: 1}})
    },
    getData () {
      let vm = this
      this.$http.get('../../../static/data.json')
        .then(function (response) {
          console.log(response, response.data, 'response')
          response.data.seller.conten.forEach((i) => {
            i.show = false
          })
          vm.seller = response.data.seller
          console.log(vm.seller, 'vm.seller')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home_wrap{
    color: red;
  }
  .acitve {
    background: yellow;
  }
</style>
