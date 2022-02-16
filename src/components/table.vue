<template>
  <div class="table">
    <slot name="header"></slot>
    <div class="tab">
      <router-link v-for="(i,index) in list" :key="index" :to="i.path" v-if="list && list.length>0" ><div @click="parent">{{i.name}}{{name}}</div></router-link>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
// import mixin from '../../static/bus.js'
export default {
  // mixins: [mixin],
  name: 'tab',
  // props: ['child', 'name'],
  props: {
    child: {
      type: Array
    },
    name: {
      type: Number
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    parent () {
      this.$emit('parent', 1)
    }
  },
  mounted () {
    let vm = this
    // bus.$on('eventName', (value) => {
    //   debugger
    //   console.log(value, 66666666)
    // })
    this.$center.$on('eventName', (value) => {
      console.log(value, 66666666)
    })
    console.log(this.$http, 333333333333333)
    this.$http.get('../../../static/table.json')
      .then(function (response) {
        console.log(response)
        console.log(response.data.seller.table)
        vm.list = response.data.seller.table
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tab{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    background: #eee;
    a{
      flex: 1;
      line-height: 49px;
      &.router-link-active{
        color: aqua;
      }
    }
  }
</style>
