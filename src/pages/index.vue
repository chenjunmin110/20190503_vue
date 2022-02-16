<template>
  <div class="page">
    3333
    <button @click="getbus">222222222222222{{son}}</button>
    <tab :child="child" :name="name" @parent="getSon" ref="tabname">
      <!--<div slot="footer">11111111111111</div>-->
      <!--<div slot="header">222222222222222</div>-->
    </tab>
    <router-view/>
  </div>
</template>

<script>
// import bus from '../../static/bus.js'
import tab from '@/components/table'
export default {
  name: 'page',
  components: {
    tab
  },
  data () {
    return {
      child: [
        {name: 'min'},
        {name: 'min1'},
        {name: 'min2'}
      ],
      name: 1,
      son: null
    }
  },
  methods: {
    getSon (close) {
      console.log(close, 2222222222)
      this.son = close
    },
    getbus () {
      let vm = this
      // bus.$emit('eventName', vm.child)
      vm.$center.$emit('eventName', vm.child)
    }
  },
  mounted () {
    // console.log(this.$refs.tabname.parent(), 222222222222)
  }
}
</script>

<style lang="scss" scoped>
</style>
